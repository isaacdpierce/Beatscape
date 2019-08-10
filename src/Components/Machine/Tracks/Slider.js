import React, { useEffect, useContext, useReducer } from 'react';
import reducer from 'Assets/reducers/reducer.js';
import PropTypes from 'prop-types';
import {
  getRandomFloat,
  setSliderValue,
  roundCorrect,
} from 'Assets/helpers/helpers';
import MachineContext from 'Context/MachineContext';
import useAudioContext from 'Assets/hooks/useAudioContext';
import Oscillator from 'Components/Machine/Tracks/Oscillator/Oscillator';
import Input from './Input';
import FaderKnob from './Knobs/FaderKnob';
import { StyledSlider, SliderContainer } from './StyledSlider';
import Audio from './Audio';

const Slider = ({
  resetValues,
  animate,
  animatedMaxVol = 1.0,
  animatedMinVol = 0,
  sound,
  type,
}) => {
  const { audioContext } = useContext(useAudioContext);
  const sliderState = {
    value: setSliderValue(type),
    nextValue: getRandomFloat(0, 1),
    stereo: 0,
    sineFrequency: 60,
  };
  const { isAnimated, isPlaying } = useContext(MachineContext);
  const [
    { value, nextValue, stereo, sineFrequency },
    setSliderState,
  ] = useReducer(reducer, sliderState);

  const audio = audioContext ? (
    <Audio
      type={type}
      pan={stereo}
      sound={sound}
      volume={value}
      isPlaying={isPlaying}
    />
  ) : (
    alert(
      'Sorry, but the Web Audio API is not supported by your browser. Please, consider upgrading to the latest version or downloading Google Chrome or Mozilla Firefox'
    )
  );

  useEffect(() => {
    if (resetValues) {
      console.log(resetValues);
    }
  }, [resetValues]);

  useEffect(() => {
    if (isAnimated && animate) {
      const volumeLoop = setTimeout(() => {
        if (value > nextValue) {
          setSliderState({ value: roundCorrect(value - 0.01, 2) });
        } else if (value < nextValue) {
          setSliderState({ value: roundCorrect(value + 0.01, 2) });
        } else if (value === nextValue) {
          const newNum = getRandomFloat(animatedMinVol, animatedMaxVol);
          setSliderState({ nextValue: roundCorrect(newNum - 0.01, 2) });
        }
      }, getRandomFloat(100, 1000));
      return () => clearTimeout(volumeLoop);
    }
    // eslint-disable-next-line
    }, [isAnimated, value, nextValue]);
    

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
      {sound && audio}
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
