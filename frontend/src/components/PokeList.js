import React from 'react';

const PokeList = ({ pokemons }) => {
  return pokemons.map((pokemon, index) => (
    <div
			style={{display: 'inline-block', width: '30%', height: '50px'}}
      className={'pokemon-row'}
      key={pokemon.id}
    >
      <img src={`${pokemon.sprites.front_default}`} />
      <h5>{pokemon.name}</h5>
    </div>
  ));
};

export default PokeList;


