import React, { useState } from 'react';
import TopControls from './TopControls/TopControls';
import Drawer from './Drawer/Drawer';
import Tracks from './Tracks/Tracks';
import BottomControls from './BottomControls/BottomControls';

import './Drawer/Drawer.css';
import './Machine.css';

const drawerOpen = {
  transform: 'translateY(0%)',
};
const drawerClose = {
  transform: 'translateY(99%)',
};

const Machine = () => {
  const [animate, setAnimate] = useState(false);
  const [drawer, setDrawer] = useState(false);

  console.log('the value of animate is:' + animate);

  const handleDrawer = () => {
    setDrawer(!drawer);
  };

  const handleAnimate = () => {
    console.log('Animate Button clicked');
    setAnimate(!animate);
  };

  const handlePlay = () => {
    console.log('Play button clicked');

    setAnimate(false);
  };

  return (
    <section className='machine'>
      <TopControls handleAnimate={handleAnimate} handlePlay={handlePlay} />
      <Tracks isAnimated={animate} />
      <BottomControls handleDrawer={handleDrawer} />
      <Drawer drawerStyle={drawer ? drawerClose : drawerOpen} />
    </section>
  );
};

export default Machine;
