import React, { useContext } from 'react';
import MachineContext from '../../../context/MachineContext';
import MasterSlider from './MasterSlider';
import './MasterSlider.css';

const MasterVolume = () => {
  const { changeMasterVolume, masterVolume } = useContext(MachineContext);
  return (
    <MasterSlider
      type='Master Volume'
      modifier='master'
      changeMasterVolume={changeMasterVolume}
      masterVolume={masterVolume}
    />
  );
};

export default MasterVolume;
