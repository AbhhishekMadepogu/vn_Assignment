import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_POKEMONS} from '../graphql/get-pokemons';
import {Pokemon} from '../components/pokemons';
import {useSelector, useDispatch} from 'react-redux';
import {read_pokemon} from '../redux/action';
export const PokemonsContainer = () => {
  const dispatch = useDispatch();
  const {data: {pokemons = []} = {}} = useQuery(GET_POKEMONS, {
    variables: {first: 100},
  });
  if (pokemons) {
    dispatch(read_pokemon(pokemons));
    console.log('Setting pokemons redux');
  }
  const data = useSelector(state => state.pokemon);
  return (
    <FlatList
      // bounces={false}
      // showsVerticalScrollIndicator={false}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) => <Pokemon pokemon={item} />}
    />
  );
};
