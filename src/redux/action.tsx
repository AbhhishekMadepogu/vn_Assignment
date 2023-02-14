import {
  CREATE_POKEMON,
  READ_POKEMON,
  UPDATE_POKEMON,
  DELETE_POKEMON,
} from './actiontype';
import {pokemonDetails} from '../utils/types';
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
