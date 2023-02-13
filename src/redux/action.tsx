import {
  CREATE_POKEMON,
  READ_POKEMON,
  UPDATE_POKEMON,
  DELETE_POKEMON,
} from './actiontype';
export const create_pokemon = (pokemon: any) => ({
  type: CREATE_POKEMON,
  payload: pokemon,
});
export const read_pokemon = (data: any) => ({
  type: READ_POKEMON,
  payload: data,
});
export const update_pokemon = (pokemon: any) => ({
  type: UPDATE_POKEMON,
  payload: pokemon,
});
export const delete_pokemon = (pokemon: any) => ({
  type: DELETE_POKEMON,
  payload: pokemon,
});
