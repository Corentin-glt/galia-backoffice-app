import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  FieldPolicy,
  from,
  InMemoryCache,
  Reference,
  split,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { getMainDefinition } from '@apollo/client/utilities';
import { createUploadLink } from 'apollo-upload-client';
import { toast } from 'react-toastify';

if (!import.meta.env.VITE_API_URL) {
  throw new Error('env VITE_API_URL is missing');
}

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_API_URL as string,
});

const uploadLink = createUploadLink({
  uri: import.meta.env.VITE_API_URL as string,
});

const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      );
      const definition = getMainDefinition(operation.query);
      if (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'mutation'
      ) {
        toast.error(`${message.slice(0, 150)}...`);
      }
    });
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
    toast.error(`[Network error]: ${networkError}`);
  }
});

type KeyArgs = FieldPolicy['keyArgs'];

/** A basic field policy that uses offset arg to splice
 * the incoming data into the existing array.
 * @see https://github.com/apollographql/apollo-client/blob/8e92be3e8b791187d8557fccd30ffc82feac5cd4/src/utilities/policies/pagination.ts#L27
 */
function offsetPagination<T = Reference>(
  keyArgs: KeyArgs = false,
  offsetKey = 'offset',
  options = { shouldRead: false },
): FieldPolicy<T[]> {
  const { shouldRead } = options;
  return {
    keyArgs,
    merge(existing, incoming, { args, canRead }) {
      if (!args) return incoming;

      let items = existing ? existing.slice(0) : [];
      items = shouldRead ? items.filter(canRead) : items;

      const offset = args['paginationInput'][offsetKey] ?? 0;
      for (let i = 0; i < incoming.length; ++i) {
        items[offset + i] = incoming[i];
      }

      return items;
    },
  };
}

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        wine(_, { args, toReference }) {
          if (!args) return null;
          return toReference({
            __typename: 'Wine',
            id: args.id,
          });
        },
      },
    },
    WinesConnection: {
      fields: {
        items: offsetPagination(),
      },
    },
  },
});

const isFile = (value: unknown) =>
  (typeof File !== 'undefined' && value instanceof File) ||
  (typeof Blob !== 'undefined' && value instanceof Blob);

const isUpload = ({ variables }: any) => Object.values(variables).some(isFile);

const splitLink = split(
  isUpload,
  // Property 'onError' is protected but type 'ApolloLink' is not a class derived from 'ApolloLink'
  uploadLink as unknown as ApolloLink,
  httpLink,
);

const client = new ApolloClient({
  cache,
  link: from([errorLink, splitLink]),
});

export default client;
