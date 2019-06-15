import React, { useContext, useState, useEffect } from 'react';
import Slider from './Slider';

import MachineContext from 'context/MachineContext';
import { getRandomFloat } from 'assets/helpers/helpers';
import Oscillator from 'components/Oscillator/Oscillator';

import './Tracks.css';

const Tracks = () => {
  const { STORE, masterVolume, isPlaying } = useContext(MachineContext);
  const [frequency, setFrequency] = useState(60);
  const [sineVolume, setSineVolume] = useState(0.2);
  const { tracks } = STORE;

  // TODO Move this to new component for adjusting frequency
  // const changeFrequency = value => {
  //   setFrequency(value);
  // };

  const changeSineVolume = value => {
    setSineVolume(value);
  };

  return (
    <section className='tracks'>
      {tracks.map((track, i) => {
        const { type, min, max, step, animate, sound } = track;

        return (
          <Slider
            key={i}
            min={min}
            max={max}
            step={step}
            type={type}
            animate={animate}
            changeSineVolume={changeSineVolume}
            sound={sound}
          />
        );
      })}
      {isPlaying && (
        <Oscillator frequency={frequency} type={'sine'} volume={sineVolume} />
      )}
    </section>
  );
};

export default Tracks;
