import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  from,
  InMemoryCache,
  split,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { createUploadLink } from 'apollo-upload-client';

if (!import.meta.env.VITE_API_URL) {
  throw new Error('env VITE_API_URL is missing');
}

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_API_URL as string,
});

const uploadLink = createUploadLink({
  uri: import.meta.env.VITE_API_URL as string,
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  }

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const cache = new InMemoryCache({
  typePolicies: {
    WinesConnection: {
      fields: {
        items: {
          keyArgs: [],
          merge(existing, incoming, { args }) {
            // Slicing is necessary because the existing data is
            // immutable, and frozen in development.
            const merged = existing ? existing.slice(0) : [];
            for (let i = 0; i < incoming.length; ++i) {
              merged[args?.offset || 0 + i] = incoming[i];
            }
            return merged;
          },
        },
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
