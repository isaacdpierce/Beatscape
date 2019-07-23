import React, { useState, useEffect, useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import { getRandomFloat } from 'Assets/helpers/helpers';
import MachineContext from 'Context/MachineContext';
import { animateVolume } from 'Assets/animations/Animations';
import FaderKnob from './Knobs/FaderKnob';
import { StyledSlider, SliderContainer } from './StyledSlider';
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
    if (type === 'Binaural') {
      changeSineVolume(value);
    }
  }, [changeSineVolume, type, value]);

  useEffect(() => {
    if (isAnimated && animate) {
      animateVolume(value, min, max, next, setValue, setNext);
    }
  }, [isAnimated, animate, value, min, max, next, setValue, setNext]);

  const handleSliderChange = () => {
    setValue(parseFloat(levelRef.current.value));
  };

  const changeStereo = val => {
    setStereo(val);
  };

  return (
    <SliderContainer>
      {sound && (
        <Audio
          pan={stereo}
          sound={sound}
          volume={value}
          type={type}
          isPlaying={isPlaying}
        />
      )}

      <StyledSlider>
        {/* <Input
          type={type}
          value={value}
          handleSliderChange={handleSliderChange}
          min={min}
          max={max}
          step={step}
        /> */}
        <label htmlFor={type}>
          <span className='slider__value'>{value}</span>
          <span className='slider__label'>{type}</span>
          <input
            aria-label={`Controls volume of ${type} track`}
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
      </StyledSlider>

      <FaderKnob
        aria-label={`Controls stereo panning of ${type} track`}
        animate={animate}
        type={type}
        sound={sound}
        changeSineFrequency={changeSineFrequency}
        changeStereo={changeStereo}
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
};

export default Slider;
