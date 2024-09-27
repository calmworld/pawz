import { ApolloClient, gql, HttpLink } from "@apollo/client";
import { cache } from "./cache"

export const client = new ApolloClient({
  cache,
  uri: import.meta.env.VITE_API_ENDPOINT,
//   headers: {
    // auth: import.meta.env.VITE_PAWZ_API_KEY,
//     endpoint: import.meta.env.VITE_API_ENDPOINT,
//     region: 'us-east-1',
//     defaultAuthMode: 'apiKey',
//     apiKey: import.meta.env.VITE_PAWZ_API_KEY
//   },
  link: new HttpLink({
    uri: import.meta.env.VITE_API_ENDPOINT,
    headers: {
        region: 'us-east-1',
        defaultAuthMode: 'apiKey',
        apiKey: import.meta.env.VITE_PAWZ_API_KEY,
    },
  }),
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
//     import AppNavigator from './navigation/AppNavigator';

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