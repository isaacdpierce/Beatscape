import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import MachineContext from 'Context/MachineContext';
import { getRandomFloat, roundCorrect } from 'Assets/helpers/helpers';
import { Knob } from 'react-rotary-knob';
import { animateKnob } from 'Assets/animations/Animations';
import KnobSkin from './Knobskin';

const knobStyle = {
  transform: 'translateY(20px) ',
  filter: 'brightness(70%)',
};

const FaderKnob = ({ animate, type, sound, changeSineFrequency }) => {
  const knobMin = type === 'Binaural' ? 30 : 1;
  const knobMax = type === 'Binaural' ? 100 : -1;

  const { isAnimated } = useContext(MachineContext);
  const [knobValue, setKnobValue] = useState(type === 'Binaural' ? 65 : 0);
  const [knobNext, setKnobNext] = useState(getRandomFloat(knobMax, knobMin));

  useEffect(() => {
    if (sound && type !== 'Binaural') {
      sound.stereo(knobValue);
    } else {
      changeSineFrequency(roundCorrect(knobValue, 0));
    }
  }, [knobValue, type, sound, changeSineFrequency]);

  useEffect(() => {
    if (isAnimated && animate) {
      animateKnob(
        knobValue,
        knobMin,
        knobMax,
        knobNext,
        setKnobValue,
        setKnobNext
      );
    }
  }, [
    knobValue,
    knobMin,
    knobMax,
    knobNext,
    setKnobValue,
    setKnobNext,
    animate,
    isAnimated,
  ]);

  const handleKnobChange = val => {
    setKnobValue(roundCorrect(val));
  };

  return (
    <Knob
      min={knobMin}
      max={knobMax}
      step={0.01}
      value={knobValue}
      onChange={handleKnobChange}
      unlockDistance={0}
      skin={KnobSkin}
      style={knobStyle}
    />
  );
};

FaderKnob.propTypes = {
  animate: PropTypes.bool,
  type: PropTypes.string.isRequired,
  sound: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  changeSineFrequency: PropTypes.func,
};

export default FaderKnob;
