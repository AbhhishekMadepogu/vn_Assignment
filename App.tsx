import React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import {SafeAreaView} from 'react-native';
import {PokemonsContainer} from './src/containers/PokemonsContainer';
const client = new ApolloClient({
  uri: 'https://graphql-pokemon2.vercel.app',
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView>
        <PokemonsContainer />
      </SafeAreaView>
    </ApolloProvider>
  );
}

export default App;
