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
export const PokemonsContainer = () => {
  const dispatch = useDispatch();
  const {data: {pokemons = []} = {}} = useQuery(GET_POKEMONS, {
    variables: {first: 100},
  });
  useMemo(() => {
    dispatch(read_pokemon(pokemons));
  }, [dispatch, pokemons]);
  const deletePokemon = (pokemon: any) => {
    dispatch(delete_pokemon(pokemon));
  };
  const editPokemon = (pokemon: any) => {
    dispatch(update_pokemon(pokemon));
  };
  const createPokemon = (pokemon: any) => {
    dispatch(create_pokemon(pokemon));
  };
  const data = useSelector(state => state.pokemon);

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
    marginBottom: 10,
  },
});
