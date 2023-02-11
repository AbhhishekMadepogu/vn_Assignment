import React, {useMemo} from 'react';
import {FlatList} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_POKEMONS} from '../graphql/get-pokemons';
import {Pokemon} from '../components/pokemons';
import {useSelector, useDispatch} from 'react-redux';
import {delete_pokemon, read_pokemon, update_pokemon} from '../redux/action';
export const PokemonsContainer = () => {
  const dispatch = useDispatch();
  const {data: {pokemons = []} = {}} = useQuery(GET_POKEMONS, {
    variables: {first: 100},
  });
  useMemo(() => {
    dispatch(read_pokemon(pokemons));
    console.log('Dispatch read');
  }, [dispatch, pokemons]);
  const deletePokemon = (pokemon: any) => {
    dispatch(delete_pokemon(pokemon));
  };
  const editPokemon = (pokemon: any) => {
    dispatch(update_pokemon(pokemon));
  };
  const data = useSelector(state => state.pokemon);
  console.log('data', data);
  return (
    <FlatList
      extraData={data}
      // bounces={false}
      // showsVerticalScrollIndicator={false}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <Pokemon
          pokemon={item}
          deletePokemon={deletePokemon}
          editPokemon={editPokemon}
        />
      )}
    />
  );
};
