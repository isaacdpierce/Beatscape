import React, { useContext } from 'react';
import MasterSlider from './MasterSlider';
import MachineContext from '../../../context/MachineContext';
import './MasterSlider.css';

const Fader = () => {
  const { changeMasterFader, masterFader } = useContext(MachineContext);
  // TODO Make master fader function

  return (
    <MasterSlider
      type='Fader'
      modifier='master'
      handleChange={changeMasterFader}
    />
  );
};

export default Fader;
