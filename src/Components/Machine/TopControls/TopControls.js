import React from 'react';
import AnimateButton from 'Components/Machine/Buttons/AnimateButton';
import PlayButton from 'Components/Machine/Buttons/PlayButton';
import Tooltip from 'Components/themes/Tooltip/Tooltip';

import headphones from 'assets/images/headphones.png';

import './TopControls.css';

const TopControls = () => {
  return (
    <section className='controls-top'>
      <div className='buttons-container'>
        <PlayButton />
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
