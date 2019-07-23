import React, { useState } from 'react';
import InfoDisplay from 'Components/Machine/InfoDisplay/InfoDisplay';
import TopControls from './TopControls/TopControls';
import Drawer from './Drawer/Drawer';
import Tracks from './Tracks/Tracks';
import BottomControls from './BottomControls/BottomControls';

import './Drawer/StyledDrawer.js';
import StyledMachine from './StyledMachine.js';

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
    <StyledMachine>
      <InfoDisplay />
      <TopControls />
      <Tracks />
      <BottomControls handleDrawer={handleDrawer} />
      <Drawer drawerStyle={drawer ? drawerClose : drawerOpen} />
    </StyledMachine>
  );
};

export default Machine;
