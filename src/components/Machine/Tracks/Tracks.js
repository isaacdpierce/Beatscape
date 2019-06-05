import React, { useState, useEffect } from 'react';

import Track from './Track';

import './Tracks.css';
// import { clearInterval } from 'timers';

const Tracks = ({ isAnimated }) => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(80);
  const [level, setLevel] = useState(60);

  const newLevel = 30;

  console.log(
    `Inside Tracks: animated is ${isAnimated} -> min is: ${min} -> max is ${max} -> level is: ${level}`
  );

  useEffect(() => {
    const moveSlider = () => {
      console.log('Moving Slider');
      if (level < newLevel) {
        setLevel(level => level + 0.1);
      }
      if (level > newLevel) {
        setLevel(level => level - 0.1);
      }
      if (level === newLevel) {
        return;
      }
    };

    if (isAnimated) {
      console.log(
        `Animate is set to ${isAnimated} so the animation is playing!`
      );
      let move = setInterval(moveSlider, getInterval(1000, 10000));
    }

    return;
  });

  const getInterval = (low, high) => {
    return Math.random() * (high - low) + low;
  };

  const getLevel = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const tracks = [
    { type: 'Kick' },
    { type: 'Snare' },
    { type: 'Percussion' },
    { type: 'Cymbal' },
    { type: 'Accessory' },
    { type: 'Melody1' },
    { type: 'Melody2' },
    { type: 'Instrument' },
    { type: 'Soundscape' },
    { type: 'Texture' },
    { type: 'Sprites' },
    { type: 'Binaural' },
  ];

  return (
    <section className='tracks'>
      {tracks.map((track, i) => {
        const { type, value } = track;
        return <Track key={i} type={type} value={level} />;
      })}
    </section>
  );
};

export default Tracks;
