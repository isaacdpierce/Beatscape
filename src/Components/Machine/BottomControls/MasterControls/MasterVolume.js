import React, { useContext } from 'react';
import MachineContext from 'Context/MachineContext';
import MasterSlider from './MasterSlider';
import './MasterSlider.css';

const MasterVolume = () => {
  const { changeMasterVolume, masterVolume } = useContext(MachineContext);
  return (
    <MasterSlider
      name='Master Volume'
      handleChange={changeMasterVolume}
      value={masterVolume}
    />
  );
};

export default MasterVolume;
