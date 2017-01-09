import { merge } from 'lodash';
import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';

export const pokemonDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_SINGLE_POKEMON:
      return action.pokemon;
    default:
      return state;
  }
};
