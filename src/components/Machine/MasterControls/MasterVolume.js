import React from 'react';
import Slider from '../Tracks/Slider';
import './MasterSlider.css';

const MasterVolume = () => {
  return <Slider type='Master Volume' modifier='master' />;
};

export default MasterVolume;
