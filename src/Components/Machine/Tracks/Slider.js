import React, { useEffect, useContext, useReducer } from 'react';
import reducer from 'Assets/reducers/reducer.js';
import PropTypes from 'prop-types';
import {
  getRandomFloat,
  setSliderValue,
  roundCorrect,
} from 'Assets/helpers/helpers';
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
  animatedMaxVol = 1.0,
  animatedMinVol = 0,
  sound,
}) => {
  const sliderState = {
    value: setSliderValue(type),
    next: getRandomFloat(0, 1),
    stereo: 0,
    sineFrequency: 60,
  };
  const { state } = useContext(MachineContext);
  const { isAnimated, isPlaying } = state;
  const [{ value, next, stereo, sineFrequency }, setSliderState] = useReducer(
    reducer,
    sliderState
  );

  useEffect(() => {
    if (isAnimated && animate) {
      const volumeLoop = setTimeout(() => {
        if (value > next) {
          setSliderState({ value: roundCorrect(value - 0.01, 2) });
        } else if (value < next) {
          setSliderState({ value: roundCorrect(value + 0.01, 2) });
        } else if (value === next) {
          const newNum = getRandomFloat(animatedMinVol, animatedMaxVol);
          setSliderState({ next: roundCorrect(newNum - 0.01, 2) });
        }
      }, getRandomFloat(100, 1000));
      return () => clearTimeout(volumeLoop);
    }
    // eslint-disable-next-line
    }, [isAnimated, value, next]);

  const changeValue = val => {
    setSliderState({ value: val });
  };

  const changeStereo = val => {
    setSliderState({ stereo: val });
  };

  const changeSineFrequency = val => {
    setSliderState({ sineFrequency: val });
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
  animatedMaxVol: PropTypes.number,
  animatedMinVol: PropTypes.number,
};

export default Slider;
