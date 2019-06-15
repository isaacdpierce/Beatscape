import React, { useState, useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';
import {
  getRandomInteger,
  getRandomFloat,
  roundCorrect,
  getNextLevel,
} from 'assets/helpers/helpers';
import MachineContext from 'context/MachineContext';
import { Knob } from 'react-rotary-knob';
import KnobSkin from 'components/Machine/BottomControls/Knobs/Knobskin';

import { SliderTheme, StyledKnob, sliderContainer } from './SliderTheme';

import { animateVolume } from 'assets/Animations/Animations';

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

  console.log(`next level of ${type} is  + ${next}`);

  //Knob Controls
  const [knobValue, setKnobValue] = useState(0);

  // const knobMin = 1
  // const knobMax = -1

  const levelRef = useRef();

  console.log(knobValue);

  useEffect(() => {
    if (type !== 'Binaural') {
      sound.stereo(knobValue);
    }
  }, [knobValue]);

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
      // animateKnob(knobValue, knobMin, knobMax, next, setKnobValue, setNext);
      console.log(animateVolume);
    }
  });

  const handleSliderChange = event => {
    setValue(parseFloat(levelRef.current.value));
    type === 'Binaural' && changeSineVolume(value);
  };

  const handleKnobChange = val => {
    setKnobValue(roundCorrect(val));
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

      <Knob
        style={StyledKnob}
        min={1}
        max={-1}
        step={0.1}
        value={knobValue}
        onChange={handleKnobChange}
        unlockDistance={0}
        skin={KnobSkin}
      />
    </div>
  );
};

export default Slider;
