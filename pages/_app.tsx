import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import client from '../utils/apollo-client'
import { ApolloProvider } from '@apollo/client'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <React.Fragment>
    <ApolloProvider client={client}>
      <Component {...pageProps} /> 
    </ApolloProvider>
  </React.Fragment> 
  )
}

export default MyApp
