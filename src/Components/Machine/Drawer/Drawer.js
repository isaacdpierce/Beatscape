import React from 'react';
import PropTypes from 'prop-types';
import DrawerButton from 'Components/Machine/Buttons/DrawerButton';

import StyledDrawer from './StyledDrawer';
// TODO - Get Soundscape name and url from DB - Then use map to create buttons with names and urls
const Drawer = ({ drawerStyle }) => (
  <>
    <StyledDrawer style={drawerStyle}>
      <div className='drawer-col'>
        <h5>Choose your music</h5>
        <DrawerButton source='http://localhost:8000/api/soundscapes/1'>
          Tough
        </DrawerButton>
        <DrawerButton source='http://localhost:8000/api/soundscapes/2'>
          Focused
        </DrawerButton>
      </div>
      <div className='drawer-col'>
        <h5>Choose your scene</h5>
        {/* TODO Set GET environments and sprites based on category */}
        <DrawerButton source='http://localhost:8000/api/scene_category/1'>
          City
        </DrawerButton>
        <DrawerButton source='http://localhost:8000/api/scene_category/2'>
          New York
        </DrawerButton>
        <DrawerButton source='http://localhost:8000/api/scene_category/3'>
          Tokyo
        </DrawerButton>
        <DrawerButton source='http://localhost:8000/api/scene_category/5'>
          Forest
        </DrawerButton>
        <DrawerButton source='http://localhost:8000/api/scene_category/6'>
          Desert
        </DrawerButton>
        <DrawerButton source='http://localhost:8000/api/scene_category/2'>
          Ocean
        </DrawerButton>
      </div>
    </StyledDrawer>
  </>
);

Drawer.propTypes = {
  drawerStyle: PropTypes.object.isRequired,
};

export default Drawer;
