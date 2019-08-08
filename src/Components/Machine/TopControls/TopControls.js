import React from 'react';
import AnimateButton from 'Components/Machine/Buttons/AnimateButton';
import PlayButton from 'Components/Machine/Buttons/PlayButton';

import HeadPhones from './Headphones';

import StyledTopControls from './StyledTopControls.js';

const TopControls = () => (
  <StyledTopControls>
    <div className='buttons-container'>
      <PlayButton />
      <HeadPhones />
      <AnimateButton />
    </div>
  </StyledTopControls>
);

export default TopControls;
