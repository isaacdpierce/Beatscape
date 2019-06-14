import React, { useState, useEffect, useRef, useContext } from 'react';
import {
  getRandomInteger,
  getRandomFloat,
  roundCorrect,
} from 'assets/helpers/helpers';
import MachineContext from 'context/MachineContext';

import SliderTheme from './SliderTheme';

import { animateTracks } from 'assets/Animations/Animations';

// TODO set isPlaying to true when isAnimated

const Slider = ({
  type,
  nextLevel,
  min = 0,
  max = 1.0,
  step = 0.01,
  animate,
  sound,
  changeSineVolume,
  id,
}) => {
  // First animation will always generate a number less than half
  // because of initial value
  const initialValue = type === 'Binaural' ? 0.05 : (max + min) / 2;
  const { isAnimated, isPlaying } = useContext(MachineContext);
  const [value, setValue] = useState(initialValue);
  const [next, setNext] = useState(nextLevel);

  const levelRef = useRef();

  console.log(value);

  useEffect(() => {
    if (type !== 'Binaural') {
      isPlaying ? sound.play() : sound.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (type !== 'Binaural') {
      sound.volume(value);
    }
  }, [value]);

  useEffect(() => {
    if (isAnimated && animate) {
      animateTracks(value, min, max, next, setValue, setNext);
    }
  });

  const handleChange = event => {
    setValue(levelRef.current.value);
    type === 'Binaural' && changeSineVolume(value);
  };

  return (
    <SliderTheme className='slider'>
      <label htmlFor='kicks'>
        <span className='slider-value'>{value}</span>
        <span className='slider-label'>{type}</span>
      </label>
      <input
        onChange={handleChange}
        type='range'
        ref={levelRef}
        value={value}
        id={type}
        name={type}
        min={min}
        max={max}
        step={step}
      />
    </SliderTheme>
  );
};

export default Slider;
