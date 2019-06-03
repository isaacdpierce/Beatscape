import React from 'react';
import Button from './Button';
import headphones from '../../assets/images/headphones.png';
import Tracks from './Tracks';

import './TopControls.css';

const Controls = () => {
  return (
    <div className='controls'>
      <div className='buttons-play'>
        <Button text='Play' type='controls' />
        <img className='headphones' src={headphones} alt='Wear headphones' />
        <Button text='Animate' type='controls' />
      </div>
      <Tracks />
    </div>
  );
};

export default Controls;
