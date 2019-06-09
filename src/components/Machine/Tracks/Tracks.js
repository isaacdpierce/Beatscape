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
        const { type } = track;
        return (
          <Slider
            key={i}
            type={type}
            nextLevel={getRandomInteger(0, masterVolume)}
          />
        );
      })}
    </section>
  );
};

export default Tracks;
