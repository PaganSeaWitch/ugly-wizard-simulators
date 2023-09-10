import React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Stat from '../Stat/Stat';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
const Jouster = ({setJoustPlayer, playerOne, disabled}) => {

  const [strength, setStrength] = React.useState(5);
  const [luck, setLuck] = React.useState(5);
  const [dexterity, setDexterity] = React.useState(5);
  const [name, setName] = React.useState('Harry Potter');
  const [house, setHouse] = React.useState('Gryffindor');


  const handleChange = (event) => {
    setHouse(event.target.value);
  };

  useEffect(() => {
    if(typeof(setJoustPlayer) != 'undefined'){
      setJoustPlayer(playerOne, strength, luck, dexterity, house, name)
    }
  }, [strength, luck, dexterity, name, house])
  

  return (

    <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
        '& .MuiTextField-root': { m: 1, width: '30ch' },
      }}
      disabled = {disabled}

    >
      <Select
        sx={{
          margin: '0px 0px 0px 90px'
        }}
        disabled = {disabled}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={house}
        label="House Affiliaton"
        onChange={handleChange}
      >
        <MenuItem value={'Gryffindor'}>Gryffindor</MenuItem>
        <MenuItem value={'Ravenclaw'}>Ravenclaw</MenuItem>
        <MenuItem value={'Slythern'}>Slythern</MenuItem>
        <MenuItem value={'Hufflepuff'}>Hufflepuff</MenuItem>
      </Select>
      <TextField
        required
        id="outlined-required"
        label="Name"
        defaultValue={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
        InputLabelProps={{
          shrink: true,
        }}
        variant="filled"
        disabled = {disabled}

      />

      <Stat statName ="Strength" disabled = {disabled} defaultVal={5} minVal={1} maxVal={10} onChange={(event) => {
          setStrength(event.target.value);
        }}>
      </Stat>
      <Stat statName ="Dexterity" disabled = {disabled} defaultVal={5} minVal={1} maxVal={10} onChange={(event) => {
          setDexterity(event.target.value);
        }}>
      </Stat>
      <Stat statName ="Luck" disabled = {disabled} defaultVal={5} minVal={1} maxVal={10} onChange={(event) => {
          setLuck(event.target.value);
        }}>
      </Stat>
    </Box>
    
  )
};

Jouster.propTypes = {};

Jouster.defaultProps = {};

export default Jouster;
