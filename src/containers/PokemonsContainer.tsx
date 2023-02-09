import React from 'react';
import {FlatList} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_POKEMONS} from '../graphql/get-pokemons';
import { Pokemon } from '../components/pokemons';

export const PokemonsContainer = () => {
  const {data: {pokemons = []} = {}} = useQuery(GET_POKEMONS, {
    variables: {first: 9},
  });
  return (
    <FlatList
      data={pokemons}
      renderItem={({item}) => <Pokemon pokemon={item}></Pokemon>}
    />
  );
};
