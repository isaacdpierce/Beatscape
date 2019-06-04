import React from 'react';
import Button from '../Button';
import headphones from '../../../assets/images/headphones.png';

import './TopControls.css';

const TopControls = () => {
  return (
    <section className='controls-top'>
      <div className='buttons-play'>
        <Button text='Play' type='controls' />
        <img className='headphones' src={headphones} alt='Wear headphones' />
        <Button text='Animate' type='controls' />
      </div>
    </section>
  );
};

export default TopControls;
