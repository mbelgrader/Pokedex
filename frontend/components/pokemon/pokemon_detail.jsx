import React from 'react';
import { Link } from 'react-router';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.params.pokemonId);
  }

  componentWillReceiveProps() {
    this.props.requestSinglePokemon(this.props.params.pokemonId);
  }


  render () {
    debugger
    const { id, name, poke_type, attack, defense, moves, items } = this.props.pokemonDetail;
    let itemLinks;
    if (items) {
      itemLinks = items.map((item, idx) => {
      return (
         <Link to={`pokemon/${id}/item/${idx + 1}`} key={idx}>
           <li ><img src={items[idx].image_url} height="25" /></li>
         </Link>
      );
   });
 }
    return (
      <div>
        <ul>
          <li>{name}</li>
          <li>Type: {poke_type}</li>
          <li>Attack: {attack}</li>
          <li>Defense: {defense}</li>
          <li>Moves: {moves}</li>
        </ul>
        <div>
        <h1>Items</h1>
        <ul>{itemLinks}</ul>
        {this.props.children}
        </div>
      </div>
    );
  }
}

export default PokemonDetail;
