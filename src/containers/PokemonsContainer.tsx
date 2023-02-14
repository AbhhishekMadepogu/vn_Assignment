import React, {useMemo} from 'react';
import {FlatList, Pressable, Text, StyleSheet} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_POKEMONS} from '../graphql/get-pokemons';
import {Pokemon} from '../components/pokemons';
import {useSelector, useDispatch} from 'react-redux';
import {
  create_pokemon,
  delete_pokemon,
  read_pokemon,
  update_pokemon,
} from '../redux/action';
import {pokemonDetails} from '../utils/types';
interface Mystate {
  pokemon: [pokemonDetails];
}
export const PokemonsContainer = () => {
  const dispatch = useDispatch();
  const {data: {pokemons = []} = {}} = useQuery(GET_POKEMONS, {
    variables: {first: 100},
  });
  //Storing the data in redux
  useMemo(() => {
    dispatch(read_pokemon(pokemons));
  }, [dispatch, pokemons]);
  //Performing Delete Operation on Redux
  const deletePokemon = (pokemon: any) => {
    dispatch(delete_pokemon(pokemon));
  };
  //performing update on redux
  const editPokemon = (pokemon: any) => {
    dispatch(update_pokemon(pokemon));
  };
  //performing Create on Redux
  const createPokemon = (pokemon: any) => {
    dispatch(create_pokemon(pokemon));
  };
  const data = useSelector((state: Mystate) => state.pokemon);

  return (
    <>
      <Pressable
        style={styles.addButton}
        onPress={() => {
          const newPokemon = {
            id: Date.now(),
            name: 'new Pokemon',
            image: data[0].image,
          };
          createPokemon(newPokemon);
        }}>
        <Text style={styles.addButtonText}>+</Text>
      </Pressable>
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
    </>
  );
};
const styles = StyleSheet.create({
  addButtonText: {color: '#fff', fontWeight: 'bold'},
  addButton: {
    backgroundColor: '#000',
    width: 30,
    height: 30,
    alignSelf: 'flex-end',
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginVertical: 10,
  },
});
