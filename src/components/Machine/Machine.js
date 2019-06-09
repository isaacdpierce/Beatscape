import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import TopControls from './TopControls/TopControls';
import Drawer from './Drawer/Drawer';
import Tracks from './Tracks/Tracks';
import AnimatedTracks from './AnimatedTracks/AnimatedTracks';
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
  const [drawer, setDrawer] = useState(false);

  const handleDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <section className='machine'>
      <TopControls />
      <Switch>
        <Route path='/' exact component={Tracks} />
        <Route path='/:animated' component={AnimatedTracks} />
      </Switch>
      <BottomControls handleDrawer={handleDrawer} />
      <Drawer drawerStyle={drawer ? drawerClose : drawerOpen} />
    </section>
  );
};

export default Machine;
