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
import SetMachineContext from 'Context/SetMachineContext';
import Input from './Input';
import FaderKnob from './Knobs/FaderKnob';
import { StyledSlider, SliderContainer } from './StyledSlider';
import Audio from './Audio';

const Slider = ({
  animate,
  animatedMaxVol = 1,
  animatedMinVol = 0,
  sound,
  type,
}) => {
  const { audioContext } = useContext(useAudioContext);
  const sliderState = {
    value: setSliderValue(type),
    nextValue: getRandomFloat(animatedMinVol, animatedMaxVol),
    stereo: 0,
    sineFrequency: 60,
  };
  const { isAnimated, isPlaying, resetValues } = useContext(MachineContext);
  const setState = useContext(SetMachineContext);
  const [
    { value, nextValue, stereo, sineFrequency },
    setSliderState,
  ] = useReducer(reducer, sliderState);

  useEffect(() => {
    if (resetValues) {
      setSliderState({ value: setSliderValue(type) });
    }
    return () => {
      setState({ resetValues: false });
    };
    // eslint-disable-next-line
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
      }, getRandomFloat(100, 2000));
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
