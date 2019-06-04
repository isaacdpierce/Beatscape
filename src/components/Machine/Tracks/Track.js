import React from 'react';

import './Track.css';

const Track = ({ type }) => {
  return (
    <div className='slider'>
      <label htmlFor='kicks'>{type}</label>
      <input type='range' id='start' name={type} min='0' max='10' step='.01' />
    </div>
  );
};

export default Track;
