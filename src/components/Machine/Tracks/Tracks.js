import React, { useContext } from 'react';
import Slider from './Slider';
import './Tracks.css';
import MachineContext from '../../../context/MachineContext';
import { getRandomInteger } from '../../../assets/helpers/helpers';

const Tracks = () => {
  const { STORE, masterVolume } = useContext(MachineContext);
  const { tracks } = STORE;

  return (
    <section className='tracks'>
      {tracks.map((track, i) => {
        const { type, min, max, step, animate, src } = track;
        return (
          <Slider
            key={i}
            min={min}
            max={max}
            step={step}
            type={type}
            animate={animate}
            nextLevel={getRandomInteger(0, masterVolume)}
            src={src}
          />
        );
      })}
    </section>
  );
};

export default Tracks;
