import React from 'react';
import TopControls from './TopControls/TopControls';
import Drawer from './Drawer/Drawer';
import Tracks from './Tracks/Tracks';
import BottomControls from './BottomControls/BottomControls';
import { useState } from 'react';

import './Drawer/Drawer.css';
import './Machine.css';

const drawerOpen = {
  transform: 'translateY(0%)',
};
const drawerClose = {
  transform: 'translateY(99%)',
};

const Machine = () => {
  const [drawer, setDrawer] = useState(false);

  const handleDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <section className='machine'>
      <TopControls />
      <Tracks />
      <BottomControls handleDrawer={handleDrawer} />
      <Drawer drawerStyle={drawer ? drawerClose : drawerOpen} />
    </section>
  );
};

export default Machine;
