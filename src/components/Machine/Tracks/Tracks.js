import React from 'react';

import Track from './Track';

import './Tracks.css';

const Tracks = () => {
  const max = 80;
  const min = 0;

  const getLevel = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  return (
    <section className='tracks'>
      <Track type='Kick' value={getLevel(min, max)} />
      <Track type='Snare' value={getLevel(min, max)} />
      <Track type='Percussion' value={getLevel(min, max)} />
      <Track type='Cymbal' value={getLevel(min, max)} />
      <Track type='Accessory' value={getLevel(min, max)} />
      <Track type='Melody1' value={getLevel(min, max)} />
      <Track type='Melody2' value={getLevel(min, max)} />
      <Track type='Instrument' value={getLevel(min, max)} />
      <Track type='Soundscape' value={getLevel(min, max)} />
      <Track type='Texture' value={getLevel(min, max)} />
      <Track type='Sprites' value={getLevel(min, max)} />
      <Track type='Binaural' value={getLevel(min, max)} />
    </section>
  );
};

export default Tracks;
