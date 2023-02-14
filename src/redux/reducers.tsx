import {pokemonDetails} from '../utils/types';
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
      return {...state, pokemon: [].concat(action.payload, state.pokemon)};
    case READ_POKEMON:
      return {...state, pokemon: action.payload};
    case UPDATE_POKEMON:
      return {
        ...state,
        pokemon: state.pokemon.map(
          (pokemon: pokemonDetails) =>
            [action.payload].find(o => o.id === pokemon.id) || pokemon,
        ),
      };
    case DELETE_POKEMON:
      return {
        ...state,
        pokemon: state.pokemon.filter(
          (a: pokemonDetails) => a.id !== action.payload.id,
        ),
      };
    default:
      return state;
  }
};
