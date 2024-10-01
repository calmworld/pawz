import { ApolloClient, createHttpLink, from, gql} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { cache } from "./cache"

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_API_ENDPOINT,
  headers: {
    'x-api-key': import.meta.env.VITE_PAWZ_API_KEY,
},
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
          console.error(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
      );
  if (networkError) console.error(`[Network error]: ${networkError}`);
});

export const client = new ApolloClient({
  cache,
  link: from([ errorLink, httpLink ]),
});


const validOwnerId = '002';

client
  .query({
    query: gql`
      query getOwner($id: ID!) {
        getOwner(id: $id) {
          id
          firstName
          lastName
          email
        }
      }
    `,
    variables: {
      id: validOwnerId, // Use the variable in the query
    },
  })
  .then((result) => console.log(result))
  .catch((error) => console.error(error));