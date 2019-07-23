import React from 'react';
import trackTypes from 'Assets/audio/trackTypes';
import Slider from 'Components/Machine/Tracks/Slider';

const useEmptySliders = () =>
  trackTypes.map((track, index) => <Slider key={index + 100} type={track} />);

export default useEmptySliders;
