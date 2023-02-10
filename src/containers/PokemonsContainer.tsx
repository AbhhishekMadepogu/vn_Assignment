import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_POKEMONS} from '../graphql/get-pokemons';
import {Pokemon} from '../components/pokemons';
import {useSelector, useDispatch} from 'react-redux';
export const PokemonsContainer = () => {
  const dispatch = useDispatch();
  const {
    loading,
    error,
    data: {pokemons = []} = {},
  } = useQuery(GET_POKEMONS, {
    variables: {first: 9},
  });

  return (
    <FlatList
      // bounces={false}
      // showsVerticalScrollIndicator={false}
      data={pokemons}
      keyExtractor={item => item.id}
      renderItem={({item}) => <Pokemon pokemon={item} />}
    />
  );
};
