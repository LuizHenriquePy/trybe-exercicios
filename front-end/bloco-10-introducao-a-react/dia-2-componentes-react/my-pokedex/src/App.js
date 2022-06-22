import React from "react";
import Pokedex from "./Pokedex";
import pokemons from "./data";

function App() {
  return (
    <div>
      <Pokedex pokemonsList={ pokemons } />
    </div>
  );
}

export default App;
