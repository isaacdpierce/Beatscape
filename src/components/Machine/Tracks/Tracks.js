import React, { useContext, useState, useEffect } from 'react';
import Slider from './Slider';
import Kick from './Audio/Kick/Kick';

import MachineContext from 'context/MachineContext';
import { getRandomFloat } from 'assets/helpers/helpers';
import Oscillator from 'components/Oscillator/Oscillator';

import './Tracks.css';

const Tracks = () => {
  const { STORE, masterVolume, isPlaying } = useContext(MachineContext);
  const [frequency, setFrequency] = useState(60);
  const [sineVolume, setSineVolume] = useState(0.1);
  const [volume, setVolume] = useState(0.5);
  const { tracks } = STORE;

  const playTracks = () => {
    console.log('Tracks Playing!');
  };

  useEffect(() => {
    isPlaying && playTracks();
  }, [isPlaying]);

  // TODO Move this to new component for adjusting frequency
  // const changeFrequency = value => {
  //   setFrequency(value);
  // };

  const changeSineVolume = value => {
    setSineVolume(value);
  };

  const changeVolume = value => {
    setVolume(value);
  };

  return (
    <section className='tracks'>
      {/* <Kick /> */}
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
            nextLevel={getRandomFloat(0, masterVolume)}
            changeSineVolume={changeSineVolume}
            changeVolume={changeVolume}
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
