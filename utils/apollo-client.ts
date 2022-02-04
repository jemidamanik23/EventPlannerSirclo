import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client =  new ApolloClient({
      link: new HttpLink({
        uri: 'http://54.169.195.29:8080/query',
        headers: {
          Authorization: ``
        }
      }),
      cache: new InMemoryCache(),
    });
    
export default client;