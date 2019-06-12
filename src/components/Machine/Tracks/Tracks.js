import React, { useContext, useState } from 'react';
import Slider from './Slider';
import './Tracks.css';
import MachineContext from 'context/MachineContext';
import { getRandomFloat } from 'assets/helpers/helpers';
import Oscillator from 'components/Oscillator/Oscillator';

const Tracks = () => {
  const { STORE, masterVolume, isPlaying } = useContext(MachineContext);
  const [frequency, setFrequency] = useState(60);
  const [sineVolume, setSineVolume] = useState(0.5);
  const { tracks } = STORE;

  // TODO Move this to new component for adjusting frequency
  // const changeFrequency = value => {
  //   setFrequency(value);
  // };

  console.log(`Master Volume in Tracks = ${masterVolume}`);

  const changeSineVolume = value => {
    value > masterVolume ? setSineVolume(masterVolume) : setSineVolume(value);
  };

  return (
    <section className='tracks'>
      {tracks.map((track, i) => {
        const { type, min, max, step, animate, url } = track;
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
            src={url}
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
