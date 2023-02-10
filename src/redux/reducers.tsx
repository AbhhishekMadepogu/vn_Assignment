import {
  CREATE_POKEMON,
  READ_POKEMON,
  UPDATE_POKEMON,
  DELETE_POKEMON,
} from './actiontype';

const initialState = {
  pokemon: [],
};
export const pokemonReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CREATE_POKEMON:
      break;
    case READ_POKEMON:
      return {...state, pokemon: action.payload};
    case UPDATE_POKEMON:
      break;
    case DELETE_POKEMON:
      break;
    default:
      return state;
  }
};
