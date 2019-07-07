import React, { useState, useEffect, useContext } from 'react';
import MachineContext from 'Context/MachineContext';
import { getRandomFloat, roundCorrect } from 'Assets/helpers/helpers';

import { Knob } from 'react-rotary-knob';
import KnobSkin from 'Components/Machine/BottomControls/Knobs/Knobskin';
import { StyledKnob } from './SliderTheme';
// client / src / Assets / Animations / Animations.js
import { animateKnob } from 'Assets/animations/animations';

const FaderKnob = ({ animate, type, sound, changeSineFrequency }) => {
  // These are set opposite to make left and right on round knob
  const knobMin = type === 'Binaural' ? 30 : 1;
  const knobMax = type === 'Binaural' ? 100 : -1;

  const { isAnimated } = useContext(MachineContext);
  const [knobValue, setKnobValue] = useState(type === 'Binaural' ? 65 : 0);
  const [knobNext, setKnobNext] = useState(getRandomFloat(knobMax, knobMin));

  useEffect(() => {
    if (type === 'Binaural') {
      changeSineFrequency(roundCorrect(knobValue, 0));
    } else {
      sound.stereo(knobValue);
    }
  }, [knobValue, changeSineFrequency, type, sound]);

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
      style={StyledKnob}
    />
  );
};

export default FaderKnob;
