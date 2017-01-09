import { values } from 'lodash/values';

export const selectAllPokemon = ({ pokemon }) => {
  return _.values(pokemon);
};

export const selectPokemonItem = (state, itemId) => {
 return state.items[itemId];
};
