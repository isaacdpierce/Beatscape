import React, { useContext } from 'react';
import MachineContext from '../../../context/MachineContext';
import { getRandomInteger } from '../../../assets/helpers/helpers';

import AnimatedTrack from './AnimatedTrack';

import '../Tracks/Tracks.css';

const Tracks = () => {
  const { STORE, masterVolume } = useContext(MachineContext);
  const { tracks } = STORE;

  return (
    <section className='tracks'>
      <span className='temporary-title'>Animated Component</span>
      {tracks.map((track, i) => {
        const { type } = track;
        return (
          <AnimatedTrack
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
