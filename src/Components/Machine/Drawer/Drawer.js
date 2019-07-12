import React from 'react';
import PropTypes from 'prop-types';

import DrawerButton from 'Components/Machine/Buttons/DrawerButton';

// TODO - Get Soundscape name and url from DB - Then use map to create buttons with names and urls
const Drawer = ({ drawerStyle }) => (
  <>
    <section className='drawer' style={drawerStyle}>
      <div className='drawer-col'>
        <DrawerButton source='http://localhost:8000/api/soundscapes/1'>
          New York Hustle
        </DrawerButton>
        <DrawerButton>Tokyo Rain</DrawerButton>
        <DrawerButton>Dusty Road</DrawerButton>
      </div>
      <div className='drawer-col'>
        <DrawerButton source='http://localhost:8000/api/soundscapes/2'>
          Secret Forest
        </DrawerButton>
        <DrawerButton>Sunset Saunter</DrawerButton>
        <DrawerButton>Beach Bounce</DrawerButton>
      </div>
    </section>
  </>
);

Drawer.propTypes = {
  drawerStyle: PropTypes.object.isRequired,
};

export default Drawer;
