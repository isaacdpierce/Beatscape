import React, { useState, useEffect, useRef, useContext } from 'react';
import {
  getRandomFloat,
  roundCorrect,
  getRandomInteger,
} from 'assets/helpers/helpers';
import MachineContext from 'Context/MachineContext';
import FaderKnob from './FaderKnob';

import { SliderTheme, StyledKnob, sliderContainer } from './SliderTheme';
import { animateVolume, animateKnob } from 'assets/Animations/Animations';

// TODO set isPlaying to true when isAnimated

const Slider = ({
  type,
  min = 0,
  max = 1.0,
  step = 0.01,
  animate,
  sound,
  changeSineVolume,
  id,
}) => {
  const initialValue = type === 'Binaural' ? 0.05 : (max + min) / 2;
  const { isAnimated, isPlaying } = useContext(MachineContext);
  const [value, setValue] = useState(initialValue);
  const [next, setNext] = useState(getRandomFloat(min, max));

  const levelRef = useRef();

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
      animateVolume(value, min, max, next, setValue, setNext);
    }
  });

  const handleSliderChange = event => {
    setValue(parseFloat(levelRef.current.value));
    type === 'Binaural' && changeSineVolume(value);
  };

  return (
    <div style={sliderContainer}>
      <SliderTheme className='slider'>
        <label htmlFor='kicks'>
          <span className='slider-value'>{value}</span>
          <span className='slider-label'>{type}</span>
        </label>
        <input
          onChange={handleSliderChange}
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

      <FaderKnob animate={animate} type={type} sound={sound} />
    </div>
  );
};

export default Slider;
