import React, { useContext } from 'react';
import MasterSlider from './MasterSlider';
import MachineContext from 'context/MachineContext';
import './MasterSlider.css';

const Fader = () => {
  const { changeMasterFader, masterFader } = useContext(MachineContext);

  return (
    <MasterSlider
      type='Fader'
      handleChange={changeMasterFader}
      value={masterFader}
    />
  );
};

export default Fader;
