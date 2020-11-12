import React, { useState, useEffect } from 'react';
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
  const [offset, setOffset] = useState('0'); 
  const [limit, setLimit] = useState('21'); 
  const classes = useStyles();


  function getNewOffset (mult){
    if(parseInt(offset) < parseInt(limit) && mult === -1)return '0'
    const val = (parseInt(offset) + (mult *  parseInt(limit)))
    console.log('VAL ', val.toString())
    return val.toString()
  }

  function nextAction(){
              setOffset(getNewOffset(1));
    console.log('OFFSET: ', offset)
    API(offset, limit).then(result => {
                setPokemons(result)
                
                console.log('pokemons filled: ', pokemons)
                console.log('filled: ', offset, limit)
              });
    console.log('OFFSET: ', offset)
  }

  function prevAction(){
              setOffset(getNewOffset(-1));
    API(offset, limit).then(result => {
                setPokemons(result)
                
                console.log('pokemons filled: ', pokemons)
                console.log('filled: ', offset, limit)
              });
  }

	if(pokemons.length !== 0)
		return (
			<div>
				<Filter/>
        <div class="container">
          <PokeList pokemons={pokemons} />
        </div>
        <button type="button" onClick={prevAction}>Prev</button>
        <button type="button" onClick={nextAction}>Next</button>
			</div>
		);
	API(offset, limit).then(result => {
              setPokemons(result); 
              
              console.log('pokemons filled: ', pokemons)
            });
	return(
    <div className={classes.root}>
      <CircularProgress style={{marginLeft: 'auto', marginRight: 'auto'}}/>
    </div>
	)
}
export default Bulbapedia;

