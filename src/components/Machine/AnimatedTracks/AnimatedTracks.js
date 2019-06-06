import React, { useState, useEffect } from 'react';
import tracksList from '../../../context/tracksList';
import { getRandomInteger } from '../../../assets/helpers/helpers';

import AnimatedTrack from './AnimatedTrack';

import '../Tracks/Tracks.css';

const Tracks = () => {
  return (
    <section className='tracks'>
      <span className='temporary-title'>Animated Component</span>
      {tracksList.map((track, i) => {
        const { type } = track;
        return (
          <AnimatedTrack
            key={i}
            type={type}
            nextLevel={getRandomInteger(0, 80)}
          />
        );
      })}
    </section>
  );
};

export default Tracks;
