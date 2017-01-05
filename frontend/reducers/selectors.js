import { values } from 'lodash/values';

export const selectAllPokemon = ({ pokemon }) => {
  return _.values(pokemon);
};
