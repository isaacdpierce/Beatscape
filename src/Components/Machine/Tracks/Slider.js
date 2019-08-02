import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { getRandomFloat, setSliderValue } from 'Assets/helpers/helpers';
import MachineContext from 'Context/MachineContext';
import { animateVolume } from 'Assets/animations/Animations';
import Input from './Input';
import FaderKnob from './Knobs/FaderKnob';
import { StyledSlider, SliderContainer } from './StyledSlider';
import Audio from './Audio';

const Slider = ({
  type,
  animate,
  animatedMaxVolume = 1.0,
  sound,
  changeSineVolume,
  changeSineFrequency,
  min = 0,
  max = 1.0,
  step = 0.01,
}) => {
  const initialValue = setSliderValue(type);
  const { isAnimated, isPlaying } = useContext(MachineContext);
  const [value, setValue] = useState(initialValue);
  const [next, setNext] = useState(getRandomFloat(min, max));
  const [stereo, setStereo] = useState(0);

  useEffect(() => {
    if (type === 'Binaural') {
      changeSineVolume(value);
    }
  }, [changeSineVolume, type, value]);

  useEffect(() => {
    if (isAnimated && animate) {
      animateVolume(value, min, animatedMaxVolume, next, setValue, setNext);
    }
    // eslint-disable-next-line
    }, [isAnimated, value, next]);

  const changeValue = val => {
    setValue(val);
  };

  const changeStereo = val => {
    setStereo(val);
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

      <StyledSlider>
        <Input
          type={type}
          min={min}
          max={max}
          step={step}
          value={value}
          changeValue={changeValue}
          initialValue={initialValue}
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
  changeSineVolume: PropTypes.func,
  changeSineFrequency: PropTypes.func,
  max: PropTypes.number,
  min: PropTypes.number,
  step: PropTypes.number,
  animatedMaxVolume: PropTypes.number,
};

export default Slider;
