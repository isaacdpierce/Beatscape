import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MachineContext from 'Context/MachineContext';
import DrawerButton from 'Components/Machine/Buttons/DrawerButton';
import Instructions from 'Components/Instructions/Instructions';
import instructionsText from 'Components/Instructions/instructionsText';
import soundscapeData from './soundscapesData';

import StyledDrawer from './StyledDrawer';

const Drawer = ({ drawerStyle }) => {
  const { showInstructions } = useContext(MachineContext);
  const musicButtons = soundscapeData.music.map((song, index) => {
    const { url, name } = song;
    return (
      <DrawerButton key={index} source={url} fetchType='music'>
        {name}
      </DrawerButton>
    );
  });
  const sceneButtons = soundscapeData.scenes.map((scene, index) => {
    const { category, spriteUrl, environmentUrl } = scene;
    return (
      <DrawerButton
        key={index}
        category={category}
        fetchType='scene'
        spriteUrl={spriteUrl}
        environmentUrl={environmentUrl}
      >
        {category}
      </DrawerButton>
    );
  });
  return (
    <StyledDrawer style={drawerStyle}>
      {!showInstructions && (
        <Instructions
          className='drawer-instructions'
          text={instructionsText.drawer}
        />
      )}
      <div className='drawer-col'>
        <h5>Choose your music</h5>
        {musicButtons}
      </div>
      <div className='drawer-col'>
        <h5>Choose your scene</h5>
        {sceneButtons}
      </div>
    </StyledDrawer>
  );
};

Drawer.propTypes = {
  drawerStyle: PropTypes.object.isRequired,
};

export default Drawer;
