import React from 'react';
import { useState } from 'react';

import './Track.css';

const Track = ({ type, value }) => {
  const [level, setLevel] = useState(null);

  const handleChange = event => {
    console.log(event.target.value);
    setLevel(event.target.value);
  };

  return (
    <div className='slider'>
      <label htmlFor='kicks'>{type}</label>
      <input
        onChange={handleChange}
        type='range'
        value={value}
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
