import React from 'react';
import AnimateButton from 'Components/Machine/Buttons/AnimateButton';
import PlayButton from 'Components/Machine/Buttons/PlayButton';
import Tooltip from 'Assets/themes/Tooltip/Tooltip';

import HeadPhones from './Headphones';

import StyledTopControls from './StyledTopControls.js';

const TopControls = () => (
  <StyledTopControls>
    <div className='buttons-container'>
      <PlayButton />
      <HeadPhones />
      <Tooltip>
        <p>Wear headphones for 3D soundscape</p>
      </Tooltip>
      <AnimateButton />
    </div>
  </StyledTopControls>
);

export default TopControls;
