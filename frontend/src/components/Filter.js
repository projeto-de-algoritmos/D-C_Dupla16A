import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import API from '../util/APIConnect'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


const Filter = ({ changeFilter }) => {
  const classes = useStyles();
  const [hp, setHp] = React.useState('');
  const [defense, setDefense] = React.useState('');
  const [spDefense, setSpDefense] = React.useState('');
  const [attack, setAttack] = React.useState('');
  const [spAttack, setSpAttack] = React.useState('');
  const [speed, setSpeed] = React.useState('');
	const filtes = [
	]

  const handleChange = (event) => {
		if (event.target.name === 'h')
			setHp(event.target.value);
		else if(event.target.name === 'd')
			setDefense(event.target.value);
		else if(event.target.name === 'sd')
			setSpDefense(event.target.value);
		else if(event.target.name === 'a')
			setAttack(event.target.value);
		else if(event.target.name === 'sa')
			setSpAttack(event.target.value);
		else if(event.target.name === 's')
			setSpeed(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">HP</InputLabel>
        <Select
					style={{width: '175px'}}
          name="h"
          id="demo-simple-select-outlined"
          value={hp}
          onChange={handleChange}
          label="HP"
        >
          <MenuItem value={'Crescente'}>Crescente</MenuItem>
          <MenuItem value={'Decrescente'}>Decrescente</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Defense</InputLabel>
        <Select
					style={{width: '175px'}}
          name="d"
          id="demo-simple-select-outlined"
          value={defense}
          onChange={handleChange}
          label="Defense"
        >
          <MenuItem value={'Crescente'}>Crescente</MenuItem>
          <MenuItem value={'Decrescente'}>Decrescente</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Special Defense</InputLabel>
        <Select
					style={{width: '175px'}}
          name="sd"
          id="demo-simple-select-outlined"
          value={spDefense}
          onChange={handleChange}
          label="Special Defense"
        >
          <MenuItem value={'Crescente'}>Crescente</MenuItem>
          <MenuItem value={'Decrescente'}>Decrescente</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Attack</InputLabel>
        <Select
					style={{width: '175px'}}
          name="a"
          id="demo-simple-select-outlined"
          value={attack}
          onChange={handleChange}
          label="Attack"
        >
          <MenuItem value={'Crescente'}>Crescente</MenuItem>
          <MenuItem value={'Decrescente'}>Decrescente</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Special Attack</InputLabel>
        <Select
					style={{width: '175px'}}
          name="sa"
          id="demo-simple-select-outlined"
          value={spAttack}
          onChange={handleChange}
          label="Special Attack"
        >
          <MenuItem value={'Crescente'}>Crescente</MenuItem>
          <MenuItem value={'Decrescente'}>Decrescente</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Speed</InputLabel>
        <Select
					style={{width: '175px'}}
          name="s"
          id="demo-simple-select-outlined"
          value={speed}
          onChange={handleChange}
          label="Speed"
        >
          <MenuItem value={'Crescente'}>Crescente</MenuItem>
          <MenuItem value={'Decrescente'}>Decrescente</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
export default Filter;

