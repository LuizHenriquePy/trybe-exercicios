import React from "react";
import PropTypes from "prop-types";
import Pokemon from "./Pokemon";


class Pokedex extends React.Component {
  render() {
    const pokemons = this.props.pokemonsList;
    console.log(pokemons);

    return(
      <div key={'pokedex'} id='pokedex'>
        { pokemons.map(element => {return <Pokemon pokemon={ element } />}) }
      </div>
    );
  }
}

// eslint-disable-next-line react/no-typos
Pokedex.PropTypes = {
  pokemons: PropTypes.object.isRequired,
}

export default Pokedex;