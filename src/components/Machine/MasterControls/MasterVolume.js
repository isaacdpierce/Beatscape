import React, { useContext } from 'react';
import MachineContext from 'context/MachineContext';
import MasterSlider from './MasterSlider';
import './MasterSlider.css';

const MasterVolume = () => {
  const { changeMasterVolume, masterVolume } = useContext(MachineContext);
  return (
    <MasterSlider
      type='Master Volume'
      handleChange={changeMasterVolume}
      value={masterVolume}
    />
  );
};

export default MasterVolume;
