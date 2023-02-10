import {useQuery} from '@apollo/client';
import {GET_POKEMONS} from '../graphql/get-pokemons';
import {
  CREATE_POKEMON,
  READ_POKEMON,
  UPDATE_POKEMON,
  DELETE_POKEMON,
} from './actiontype';
import {PokemonsContainer} from '../containers/PokemonsContainer';
const initialState = {
  pokemons: PokemonsContainer,
};
export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POKEMON:
      break;
    case READ_POKEMON:
      break;
    case UPDATE_POKEMON:
      break;
    case DELETE_POKEMON:
      break;
    default:
      return state;
  }
};
