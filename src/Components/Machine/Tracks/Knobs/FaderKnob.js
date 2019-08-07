import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import MachineContext from 'Context/MachineContext';
import { getRandomFloat, roundCorrect } from 'Assets/helpers/helpers';
import { Knob } from 'react-rotary-knob';
import KnobSkin from './Knobskin';

const knobStyle = {
  filter: 'brightness(70%)',
  margin: '1rem auto 0',
};
const FaderKnob = ({
  animate,
  type,
  sound,
  changeSineFrequency,
  changeStereo,
}) => {
  const knobMin = type === 'Binaural' ? 30 : 1;
  const knobMax = type === 'Binaural' ? 100 : -1;
  const initialValue = type === 'Binaural' ? 65 : 0;
  const { isAnimated } = useContext(MachineContext);
  const [knobValue, setKnobValue] = useState(initialValue);
  const [knobNext, setKnobNext] = useState(getRandomFloat(knobMax, knobMin));

  useEffect(() => {
    if (type === 'Binaural') {
      changeSineFrequency(knobValue);
    }
    if (sound) {
      changeStereo(knobValue);
    }
    // eslint-disable-next-line
  }, [knobValue]);

  useEffect(() => {
    if (isAnimated) {
      const knobLoop = setTimeout(() => {
        if (knobValue > knobNext) {
          setKnobValue(roundCorrect(knobValue - 0.01, 2));
        } else if (knobValue < knobNext) {
          setKnobValue(roundCorrect(knobValue + 0.01, 2));
        } else if (knobValue === knobNext) {
          const newNum = getRandomFloat(knobMax, knobMin);
          setKnobNext(roundCorrect(newNum - 0.01, 2));
        }
      }, 0);
      return () => clearTimeout(knobLoop);
    }
    // eslint-disable-next-line
  }, [knobValue, knobNext, isAnimated]);

  return (
    <Knob
      min={knobMin}
      max={knobMax}
      step={0.01}
      value={knobValue}
      onChange={e => setKnobValue(roundCorrect(e))}
      unlockDistance={0}
      skin={KnobSkin}
      style={knobStyle}
    />
  );
};

FaderKnob.propTypes = {
  animate: PropTypes.bool,
  type: PropTypes.string.isRequired,
  sound: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  changeSineFrequency: PropTypes.func,
  changeStereo: PropTypes.func,
};

export default FaderKnob;
