import React from 'react';
import PropTypes from 'prop-types';
import DrawerButton from 'Components/Machine/Buttons/DrawerButton';
import soundscapeData from './soundscapesData';

import StyledDrawer from './StyledDrawer';

const Drawer = ({ drawerStyle }) => {
  const musicButtons = soundscapeData.music.map((song, index) => {
    const { url, name } = song;
    return (
      <DrawerButton key={index} source={url} fetchType='music'>
        {name}
      </DrawerButton>
    );
  });
  const sceneButtons = soundscapeData.scenes.map((scene, index) => {
    const { url, category } = scene;
    return (
      <DrawerButton key={index} source={url} fetchType='scene'>
        {category}
      </DrawerButton>
    );
  });
  return (
    <>
      <StyledDrawer style={drawerStyle}>
        <div className='drawer-col'>
          <h5>Choose your music</h5>
          {musicButtons}
        </div>
        <div className='drawer-col'>
          <h5>Choose your scene</h5>
          {/* TODO Set GET environments and sprites based on category */}
          {sceneButtons}
        </div>
      </StyledDrawer>
    </>
  );
};

Drawer.propTypes = {
  drawerStyle: PropTypes.object.isRequired,
};

export default Drawer;
