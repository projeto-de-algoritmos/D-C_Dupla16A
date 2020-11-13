import React, { useState, useEffect } from 'react';
import Filter from './Filter'
import PokeList from './PokeList'
import mergeSort from '../util/mergeSort'
import API from '../util/APIConnect'
import { makeStyles } from '@material-ui/core/styles';
import {CircularProgress, Button} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const Bulbapedia = () => {
  const [pokemons, setPokemons] = useState(null); 
  const [offset, setOffset] = useState(0); 
  const [limit, setLimit] = useState(21); 
  const classes = useStyles();


  function changeFilter (atrib, ord){
		mergeSort(setPokemons, pokemons, atrib, ord);
		console.log('asd', setPokemons)
  }

  function nextAction(){
		setOffset(offset + limit);
  }

  function prevAction(){
		if(offset){
			setOffset(offset - limit);
		}
  }

	if(pokemons !== null)
		return (
			<div>
				<Filter changeFilter={changeFilter}/>
        <div style={{display: 'inline-block'}}>
          <PokeList pokemons={pokemons} offset={offset} limit={limit} />
        </div>
        <div style={{marginTop: '20px'}}>
					<Button type="button" onClick={prevAction}>Prev</Button>
					<Button type="button" onClick={nextAction}>Next</Button>
        </div>
			</div>
		);
	API(setPokemons)
	return(
    <div className={classes.root}>
      <CircularProgress style={{marginLeft: 'auto', marginRight: 'auto'}}/>
    </div>
	)
}
export default Bulbapedia;

