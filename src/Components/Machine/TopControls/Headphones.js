import React from 'react';
import headphones from 'Assets/images/headphones.png';
import Tooltip from 'Assets/themes/Tooltip/Tooltip';

const Headphones = () => (
  <figure className='headphones'>
    <img className='headphones__img' src={headphones} alt='Wear headphones' />
    <Tooltip>
      <p>Wear headphones for 3D soundscape</p>
    </Tooltip>
  </figure>
);

export default Headphones;
