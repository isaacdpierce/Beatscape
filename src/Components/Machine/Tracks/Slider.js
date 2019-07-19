import React, { useState, useEffect, useRef, useContext } from 'react';
import PropTypes from 'prop-types';

import { getRandomFloat, roundCorrect } from 'Assets/helpers/helpers';
import MachineContext from 'Context/MachineContext';
import { animateVolume } from 'Assets/animations/Animations';
import FaderKnob from './FaderKnob';
import { SliderTheme, sliderContainer } from './SliderTheme';
import Audio from './Audio';

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
  const [stereo, setStereo] = useState(0);

  const levelRef = useRef();

  useEffect(() => {
    if (isAnimated && animate) {
      animateVolume(value, min, max, next, setValue, setNext);
    }
  }, [isAnimated, animate, value, min, max, next, setValue, setNext]);

  const handleSliderChange = () => {
    if (type === 'Binaural') {
      changeSineVolume(value);
    }
    setValue(parseFloat(levelRef.current.value));
  };

  const changeStereo = val => {
    setStereo(val);
  };

  return (
    <div style={sliderContainer}>
      {sound && (
        <Audio
          pan={stereo}
          sound={sound}
          volume={value}
          type={type}
          isPlaying={isPlaying}
        />
      )}
      <SliderTheme className='slider'>
        <label htmlFor={type}>
          <span className='slider-value'>{value}</span>
          <span className='slider-label'>{type}</span>
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
        </label>
      </SliderTheme>

      <FaderKnob
        key={type}
        animate={animate}
        type={type}
        sound={sound}
        changeSineFrequency={changeSineFrequency}
        changeStereo={changeStereo}
      />
    </div>
  );
};

Slider.propTypes = {
  type: PropTypes.string.isRequired,
  animate: PropTypes.bool,
  sound: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  changeSineVolume: PropTypes.func,
  changeSineFrequency: PropTypes.func,
};

export default Slider;
