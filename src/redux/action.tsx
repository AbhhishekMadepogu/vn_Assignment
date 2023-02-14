import {
  CREATE_POKEMON,
  READ_POKEMON,
  UPDATE_POKEMON,
  DELETE_POKEMON,
} from './actiontype';
type pokemonDetails = {id: String; name: String; image: String};
export const create_pokemon = (pokemon: pokemonDetails) => ({
  type: CREATE_POKEMON,
  payload: pokemon,
});
export const read_pokemon = (data: [pokemonDetails]) => ({
  type: READ_POKEMON,
  payload: data,
});
export const update_pokemon = (pokemon: pokemonDetails) => ({
  type: UPDATE_POKEMON,
  payload: pokemon,
});
export const delete_pokemon = (pokemon: pokemonDetails) => ({
  type: DELETE_POKEMON,
  payload: pokemon,
});
