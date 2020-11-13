import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const PokeList = ({ pokemons, limit, offset }) => {
  const [pokemonList, setPokemonList] = React.useState('');
  const classes = useStyles();
	console.log('pokemons', pokemons);
	if(pokemons.length === 0){
		console.log('vide')
		return(
			<div className={classes.root}>
				<CircularProgress style={{marginLeft: 'auto', marginRight: 'auto'}}/>
			</div>
		)
	}
	const displayTypes = (types) => {
		return(types.map(type => (
			<h5 style={{marginLeft: '5px'}}>{type.type.name}</h5>
		))
		)
	}
	console.log(pokemons)
  return pokemons.map((pokemon, index) => {if(index < offset+limit && index >= offset)
        return(
    <div
			style={{display: 'inline-block', width: '30%', height: '50px'}}
      key={pokemon.id}
    >
			<div style={{display: 'flex', border: '1px solid', marginLeft: '5px'}}>
				<img src={`${pokemon.sprites.front_default}`} />
				<div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
					<div style={{display: 'flex', justifyContent: 'space-between'}}>
						<h5 style={{marginRight: '20px'}}>{pokemon.name}</h5>
						<div style={{display: 'flex', marginRight: '30px'}}>
							{displayTypes(pokemon.types)}
						</div>
					</div>
					<div style={{display: 'flex', justifyContent: 'space-between'}}>
						<h5 style={{fontSize: '50%', marginLeft: '5px'}}>HP: {pokemon.stats[0].base_stat}</h5>
						<h5 style={{fontSize: '50%', marginLeft: '5px'}}>Attack: {pokemon.stats[1].base_stat}</h5>
						<h5 style={{fontSize: '50%', marginLeft: '5px'}}>Defense: {pokemon.stats[2].base_stat}</h5>
						<h5 style={{fontSize: '50%', marginLeft: '5px'}}>SP Attack: {pokemon.stats[3].base_stat}</h5>
						<h5 style={{fontSize: '50%', marginLeft: '5px'}}>SP Defense: {pokemon.stats[4].base_stat}</h5>
						<h5 style={{fontSize: '50%', marginLeft: '5px', marginRight: '5px'}}>Speed: {pokemon.stats[5].base_stat}</h5>
					</div>
				</div>
			</div>
    </div>
  )});
};

export default PokeList;


