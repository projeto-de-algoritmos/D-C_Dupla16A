import React from 'react';

const PokeList = ({ pokemons }) => {
  return pokemons.map((pokemon, index) => (
    <div
			style={{marginLeft: 'auto', marginRight: 'auto'}}
      className={'pokemon-row'}
      key={pokemon.id}
    >
    </div>
  ));
};

export default PokeList;


