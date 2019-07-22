import React, { useContext } from 'react';
import MachineContext from 'Context/MachineContext';
import AnimateButton from 'Components/Machine/Buttons/AnimateButton';
import PlayButton from 'Components/Machine/Buttons/PlayButton';
import Tooltip from 'Assets/themes/Tooltip/Tooltip';
import Loader from 'Components/Loader/Loader';
import HeadPhones from './Headphones';

import StyledTopControls from './StyledTopControls.js';

const TopControls = () => {
  const { isLoading } = useContext(MachineContext);
  return (
    <StyledTopControls>
      <div className='buttons-container'>
        <PlayButton />
        {isLoading ? <Loader /> : <HeadPhones />}

        <Tooltip>
          <p>Wear headphones for 3D soundscape</p>
        </Tooltip>
        <AnimateButton />
      </div>
    </StyledTopControls>
  );
};

export default TopControls;
