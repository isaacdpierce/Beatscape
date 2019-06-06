import React from 'react';
import { useState } from 'react';

import './Track.css';

const Track = ({ type }) => {
  const [level, setLevel] = useState(50);

  const handleChange = event => {
    console.log(event.target.value);
    setLevel(event.target.value);
  };

  return (
    <div className='slider'>
      <label htmlFor='kicks'>
        <span className='slider__value'>{level}</span>
        <span className='slider__label'>{type}</span>
      </label>
      <input
        onChange={handleChange}
        type='range'
        value={level}
        id='start'
        name={type}
        min='0'
        max='100'
        step='.01'
      />
    </div>
  );
};

export default Track;
