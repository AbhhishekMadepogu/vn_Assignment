import React from 'react';
import {ApolloClient} from '@apollo/client';
import {ApolloProvider} from '@apollo/client';
import {InMemoryCache} from '@apollo/client';
import Home from './src/screens/Home';
const client = new ApolloClient({
  uri: 'https://graphql-pokemon2.vercel.app',
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}

export default App;
