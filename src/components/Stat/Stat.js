import React from 'react';
import PropTypes from 'prop-types';
import Slider from '@mui/material/Slider';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const Stat = ({statName, defaultVal, minVal, maxVal, onChange, disabled}) => (

  <div>
      <InputLabel id="demo-simple-select-standard-label">{statName}</InputLabel>
      <Slider
        aria-label={statName}
        defaultValue={defaultVal}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={minVal}
        max={maxVal}
        onChange = {onChange}
        disabled = {disabled}
      />
  </div>

);

Stat.propTypes = {};

Stat.defaultProps = {};

export default Stat;
