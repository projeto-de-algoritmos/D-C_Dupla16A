import React, { useState, useEffect } from 'react';
import Filter from './Filter'
import PokeList from './PokeList'
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

const Bulbapedia = ({ changeFilter }) => {
  const [pokemons, setPokemons] = useState(null); 
  const [offset, setOffset] = useState(0); 
  const [limit, setLimit] = useState(21); 
  const classes = useStyles();


  function getNewOffset (mult){
    if(parseInt(offset) < parseInt(limit) && mult === -1)return '0'
    const val = (parseInt(offset) + (mult *  parseInt(limit)))
    console.log('VAL ', val.toString())
    return val.toString()
  }

  function nextAction(){
		setPokemons([]);
    API(offset + 50, limit).then(result => setPokemons(result));
		setOffset(offset + 50);
  }

  function prevAction(){
		setPokemons([]);
		if(offset){
			API(offset - 50, limit).then(result => setPokemons(result));
			setOffset(offset - 50);
		}
  }

	if(pokemons !== null)
		return (
			<div>
				<Filter/>
        <div style={{display: 'inline-block'}}>
          <PokeList pokemons={pokemons} />
        </div>
        <div style={{marginTop: '20px'}}>
					<Button type="button" onClick={prevAction}>Prev</Button>
					<Button type="button" onClick={nextAction}>Next</Button>
        </div>
			</div>
		);
	API(offset, limit).then(result => {
		setPokemons(result); 
	});
	return(
    <div className={classes.root}>
      <CircularProgress style={{marginLeft: 'auto', marginRight: 'auto'}}/>
    </div>
	)
}
export default Bulbapedia;

