import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render () {
    let pokes = this.props.pokemon.map((poke, idx) => {
      return (<li key={idx}>{poke.name}
          <img src={poke.image_url} height="100" />
        </li>);
    });
    return (
      <div>
        <ul>
          Pokes
          {pokes}
        </ul>
      </div>
    );
  }
}


export default PokemonIndex;
