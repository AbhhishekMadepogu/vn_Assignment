import {createStore} from 'redux';
import {pokemonReducer} from './reducers';
export const pokemonStore = createStore(pokemonReducer);
