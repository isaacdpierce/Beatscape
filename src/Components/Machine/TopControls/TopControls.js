import React from 'react';
import AnimateButton from 'Components/Machine/Buttons/AnimateButton';
import PlayButton from 'Components/Machine/Buttons/PlayButton';
import Tooltip from 'Assets/themes/Tooltip/Tooltip';
import headphones from 'Assets/images/headphones.png';
import StyledTopControls from './StyledTopControls.js';

const TopControls = () => (
  <StyledTopControls>
    <div className='buttons-container'>
      <PlayButton />
      <figure className='headphones'>
        <img
          className='headphones__img'
          src={headphones}
          alt='Wear headphones'
        />
      </figure>

      <Tooltip>
        <p>Wear headphones for 3D soundscape</p>
      </Tooltip>
      <AnimateButton />
    </div>
  </StyledTopControls>
);

export default TopControls;
