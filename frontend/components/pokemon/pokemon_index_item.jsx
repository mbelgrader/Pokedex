import React from 'react';
import { Link } from 'react-router';

const PokemonIndexItem = ({ poke }) => {

    return (
      <Link to={`/pokemon/${poke.id}`}>
        <li key={poke.id}>{poke.name}
          <img src={poke.image_url} height="100" />
        </li>
      </Link>
    );
};

export default PokemonIndexItem;
