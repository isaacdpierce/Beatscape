import React from 'react';
import { useState } from 'react';

import Track from './Track';

import './Tracks.css';

const Tracks = () => {
  const getLevel = () => {};

  return (
    <section className='tracks'>
      <Track type='Kick' level={getLevel()} />
      <Track type='Snare' />
      <Track type='Percussion' />
      <Track type='Cymbal' />
      <Track type='Accessory' />
      <Track type='Melody1' />
      <Track type='Melody2' />
      <Track type='Instrument' />
      <Track type='Soundscape' />
      <Track type='Texture' />
      <Track type='Sprites' />
      <Track type='Binaural' />
    </section>
  );
};

export default Tracks;
