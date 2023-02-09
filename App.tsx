import React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import Home from './src/screens/Home';
import {Provider} from 'react-redux';
import {pokemonStore} from './src/redux/store';
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
