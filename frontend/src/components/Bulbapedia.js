import React, { useState } from 'react';
import Filter from './Filter'
import PokeList from './PokeList'
import API from '../util/APIConnect'
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

const Bulbapedia = ({ changeFilter }) => {
  const [pokemons, setPokemons] = useState([]); 
  const classes = useStyles();

	if(pokemons.length !== 0)
		return (
			<div>
				<Filter/>
			</div>
		);
	API().then(result => setPokemons(result));
	return(
    <div className={classes.root}>
      <CircularProgress style={{marginLeft: 'auto', marginRight: 'auto'}}/>
    </div>
	)
}
export default Bulbapedia;

