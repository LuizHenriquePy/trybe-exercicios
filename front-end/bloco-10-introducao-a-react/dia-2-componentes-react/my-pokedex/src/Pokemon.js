import React from "react";
import PropTypes from "prop-types";

class Pokemon extends React.Component {
  render() {
    const pokemon = this.props.pokemon;
    console.log(pokemon);

    return(
      <div key={pokemon.name} class='pokemon'>
        <div>
        <h3>Name: { pokemon.name }</h3>
        <h3>Type: { pokemon.type }</h3>
        <h3>Average weight: {`${pokemon.averageWeight.value} ${pokemon.averageWeight.measurementUnit}`}</h3>
        <h3><a href={ pokemon.moreInfo } target='_blank' rel="noreferrer" >More information</a></h3>
        </div>
        <div>
          <img src={ pokemon.image } alt='Pokemon' class='pokemonPhoto' />
        </div>
      </div>
    );
  }
}

// eslint-disable-next-line react/no-typos
Pokemon.PropTypes = {
  pokemon: PropTypes.object.isRequired,
}

export default Pokemon;