import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
      link: new HttpLink({
        uri: 'https://54-179-192-241.sslip.io/query',
      }),
      cache: new InMemoryCache(),  
});
    
export default client;