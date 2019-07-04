import React, { useState, useEffect, useContext } from 'react';
import MachineContext from 'Context/MachineContext';
import {
  getRandomFloat,
  roundCorrect,
  getRandomInteger,
} from 'Assets/helpers/helpers';

import { Knob } from 'react-rotary-knob';
import KnobSkin from 'Components/Machine/BottomControls/Knobs/Knobskin';
import { StyledKnob } from './SliderTheme';
// client / src / Assets / Animations / Animations.js
import { animateKnob } from 'Assets/animations/animations';

const FaderKnob = ({ animate, type, sound }) => {
  // These are set opposite to make left and right on round knob
  const knobMin = 1;
  const knobMax = -1;

  const { isAnimated, isPlaying } = useContext(MachineContext);
  const [knobValue, setKnobValue] = useState(0);
  const [knobNext, setKnobNext] = useState(getRandomFloat(knobMax, knobMin));

  useEffect(() => {
    if (type !== 'Binaural') {
      sound.stereo(knobValue);
    }
  }, [knobValue]);

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
  });

  const handleKnobChange = val => {
    setKnobValue(roundCorrect(val));
  };

  return (
    <Knob
      min={1}
      max={-1}
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
