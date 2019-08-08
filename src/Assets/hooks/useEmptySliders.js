import React from 'react';
import Slider from 'Components/Machine/Tracks/Slider';

const trackTypes = [
  'kick',
  'snare',
  'percussion',
  'cymbals',
  'accessory',
  'melody',
  'harmony',
  'instrument',
  'bass',
];

const useEmptySliders = () =>
  trackTypes.map((track, index) => <Slider key={index + 100} type={track} />);

export default useEmptySliders;
