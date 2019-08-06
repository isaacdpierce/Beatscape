import React, { useState, useEffect, useContext, useReducer } from 'react';
import reducer from 'Assets/reducers/reducer.js';
import PropTypes from 'prop-types';
import { getRandomFloat, setSliderValue } from 'Assets/helpers/helpers';
import MachineContext from 'Context/MachineContext';
import { animateVolume } from 'Assets/animations/Animations';
import Oscillator from 'Components/Machine/Tracks/Oscillator/Oscillator';
import Input from './Input';
import FaderKnob from './Knobs/FaderKnob';
import { StyledSlider, SliderContainer } from './StyledSlider';
import Audio from './Audio';

const Slider = ({
  type,
  animate,
  animatedMaxVolume = 1.0,
  sound,
  min = 0,
  max = 1.0,
  step = 0.01,
}) => {
  const sliderState = {
    value: setSliderValue(type),
    next: getRandomFloat(min, max),
    stereo: 0,
    sineFrequency: 60,
  };
  const { isAnimated, isPlaying } = useContext(MachineContext);
  const [{ value, next, stereo, sineFrequency }, setState] = useReducer(
    reducer,
    sliderState
  );

  useEffect(() => {
    if (isAnimated && animate) {
      animateVolume(value, min, animatedMaxVolume, next, setState);
    }
    // eslint-disable-next-line
    }, [isAnimated, value, next]);

  const changeValue = val => {
    setState({ value: val });
  };

  const changeStereo = val => {
    setState({ stereo: val });
  };

  const changeSineFrequency = val => {
    setState({ sineFrequency: val });
  };

  return (
    <SliderContainer>
      {sound && (
        <Audio
          type={type}
          pan={stereo}
          sound={sound}
          volume={value}
          isPlaying={isPlaying}
        />
      )}
      {type === 'Binaural' && (
        <Oscillator
          frequency={sineFrequency}
          type='sine'
          volume={value}
          isPlaying={isPlaying}
        />
      )}

      <StyledSlider>
        <Input
          type={type}
          min={min}
          max={max}
          step={step}
          value={value}
          changeValue={changeValue}
          aria-label={`Controls volume of ${type} track`}
        />
      </StyledSlider>

      <FaderKnob
        animate={animate}
        type={type}
        sound={sound}
        changeSineFrequency={changeSineFrequency}
        changeStereo={changeStereo}
        aria-label={`Controls stereo panning of ${type} track`}
      />
    </SliderContainer>
  );
};

Slider.propTypes = {
  type: PropTypes.string.isRequired,
  animate: PropTypes.bool,
  sound: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  step: PropTypes.number,
  animatedMaxVolume: PropTypes.number,
};

export default Slider;
