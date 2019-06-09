import React from 'react';
import AnimateButton from '../AnimateButtons/AnimateButton';
import LinkButton from '../LinkButton';
import Tooltip from '../../themes/Tooltip/Tooltip';

import headphones from '../../../assets/images/headphones.png';

import './TopControls.css';

const TopControls = () => {
  return (
    <section className='controls-top'>
      <div className='buttons-container'>
        <LinkButton text='Play' />
        <figure className='headphones'>
          <img
            className='headphones__img'
            src={headphones}
            alt='Wear headphones'
          />
        </figure>

        <Tooltip size='small'>
          <p>Wear headphones for 3D soundscape</p>
        </Tooltip>
        <AnimateButton />
      </div>
    </section>
  );
};

export default TopControls;
