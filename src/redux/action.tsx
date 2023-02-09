import {
  CREATE_POKEMON,
  READ_POKEMON,
  UPDATE_POKEMON,
  DELETE_POKEMON,
} from './actiontype';
export const create_pokemon = () => ({
  type: CREATE_POKEMON,
});
export const read_pokemon = () => ({
  type: READ_POKEMON,
});
export const update_pokemon = () => ({
  type: UPDATE_POKEMON,
});
export const delete_pokemon = () => ({
  type: DELETE_POKEMON,
});
