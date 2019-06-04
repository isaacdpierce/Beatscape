import React from 'react';

import './Track.css';

const Track = ({ type, level }) => {
  return (
    <div className='slider'>
      <label htmlFor='kicks'>{type}</label>
      <input
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
