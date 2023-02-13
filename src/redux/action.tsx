import {
  CREATE_POKEMON,
  READ_POKEMON,
  UPDATE_POKEMON,
  DELETE_POKEMON,
} from './actiontype';
import {pokemon} from '../utils/types';
export const create_pokemon = (pokemon: pokemon) => ({
  type: CREATE_POKEMON,
  payload: pokemon,
});
export const read_pokemon = (data: [pokemon]) => ({
  type: READ_POKEMON,
  payload: data,
});
export const update_pokemon = (pokemon: pokemon) => ({
  type: UPDATE_POKEMON,
  payload: pokemon,
});
export const delete_pokemon = (pokemon: pokemon) => ({
  type: DELETE_POKEMON,
  payload: pokemon,
});
