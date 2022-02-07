import { ApolloClient, InMemoryCache, HttpLink, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { useEffect, useState } from "react";

const client = new ApolloClient({
      link: new HttpLink({
        uri: 'http://54.169.195.29:8080/query',
      }),
      cache: new InMemoryCache(),  
});
    
export default client;