import { ApolloClient, createHttpLink, from, gql, HttpLink } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { cache } from "./cache"

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_API_ENDPOINT,
  headers: {
    region: 'us-east-1',
    defaultAuthMode: 'apiKey',
    apiKey: import.meta.env.VITE_PAWZ_API_KEY,
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



client
  .query({
    query: gql`
      query getOwner {
        getOwner(id: "") {
          id
        }
      }
    `,
  })
  .then((result) => console.log(result));



//   import AWSAppSyncClient from 'aws-appsync' // <--------- use this instead of Apollo Client
//     import {ApolloProvider} from 'react-apollo' 
//     import { Rehydrated } from 'aws-appsync-react' // <--------- Rehydrated is required to work with Apollo

//     import config from './aws-exports'

//     const client = new AWSAppSyncClient({
//       url: config.aws_appsync_graphqlEndpoint,
//       region: config.aws_appsync_region,
//       auth: {
//         type: config.aws_appsync_authenticationType,
//         apiKey: config.aws_appsync_apiKey,
//         // jwtToken: async () => token, // Required when you use Cognito UserPools OR OpenID Connect. token object is obtained previously
//       }
//     })


//     export default class App extends React.Component {
//       render() {
//         return <ApolloProvider client={client}>
//           <Rehydrated>
//             <View style={styles.container}>
//               <AppNavigator />
//             </View>
//           </Rehydrated>  
//         </ApolloProvider>
//     }