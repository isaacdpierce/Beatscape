import React, { useState, useEffect, useRef, useContext } from 'react';
import PropTypes from 'prop-types';

import { getRandomFloat } from 'Assets/helpers/helpers';
import MachineContext from 'Context/MachineContext';
import { animateVolume } from 'Assets/animations/Animations';
import FaderKnob from './FaderKnob';
import { SliderTheme, sliderContainer } from './SliderTheme';

const Slider = ({
  type,
  animate,
  sound,
  changeSineVolume,
  changeSineFrequency,
}) => {
  const min = 0;
  const max = 1.0;
  const step = 0.01;
  const initialValue = type === 'Binaural' ? 0.05 : 0.5;
  const { isAnimated, isPlaying } = useContext(MachineContext);
  const [value, setValue] = useState(initialValue);
  const [next, setNext] = useState(getRandomFloat(min, max));

  const levelRef = useRef();

  useEffect(() => {
    if (type !== 'Binaural') {
      // eslint-disable-next-line no-unused-expressions
      isPlaying ? sound.play() : sound.pause();
    }
  }, [isPlaying, sound, type]);

  useEffect(() => {
    if (type !== 'Binaural') {
      sound.volume(value);
    }
  }, [value, sound, type]);

  useEffect(() => {
    if (isAnimated && animate) {
      animateVolume(value, min, max, next, setValue, setNext);
    }
  }, [isAnimated, animate, value, min, max, next, setValue, setNext]);

  const handleSliderChange = event => {
    setValue(parseFloat(levelRef.current.value));
    if (type === 'Binaural') {
      changeSineVolume(value);
    }
  };

  return (
    <div style={sliderContainer}>
      <SliderTheme className='slider'>
        <label htmlFor={type}>
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

      <FaderKnob
        animate={animate}
        type={type}
        sound={sound}
        changeSineFrequency={changeSineFrequency}
      />
    </div>
  );
};

Slider.propTypes = {
  type: PropTypes.string.isRequired,
  animate: PropTypes.bool.isRequired,
  sound: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  changeSineVolume: PropTypes.func.isRequired,
  changeSineFrequency: PropTypes.func.isRequired,
};

export default Slider;
