import {
  ApolloClient,
  createHttpLink,
  from,
  InMemoryCache,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

if (!import.meta.env.VITE_API_URL) {
  throw new Error('env VITE_API_URL is missing');
}

const httpLink = createHttpLink({
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

// const cache = new InMemoryCache({
//   typePolicies: {
//     WineConnection: {
//       fields: {
//         items: {
//           keyArgs: [],
//           merge(existing, incoming, { args }) {
//             // Slicing is necessary because the existing data is
//             // immutable, and frozen in development.
//             const merged = existing ? existing.slice(0) : [];
//             for (let i = 0; i < incoming.length; ++i) {
//               merged[args?.offset || 0 + i] = incoming[i];
//             }
//             return merged;
//           },
//         },
//       },
//     },
//   },
// });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([errorLink, httpLink]),
});

export default client;
