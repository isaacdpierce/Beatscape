import React, { useState, useEffect } from 'react';

import Track from './Track';

import './Tracks.css';

const Tracks = ({ isAnimated }) => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(80);

  console.log(
    `Inside Tracks: animated is ${isAnimated} -> min is: ${min} -> max is ${max}`
  );

  useEffect(() => {
    if (isAnimated) {
      console.log(
        `Animate is set to ${isAnimated} so the animation is playing!`
      );
      setInterval(() => {
        console.log(min);
        setMin(60);
      }, 1000);
    }
  });

  const getLevel = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const tracks = [
    { type: 'Kick', value: getLevel(min, max) },
    { type: 'Snare', value: getLevel(min, max) },
    { type: 'Percussion', value: getLevel(min, max) },
    { type: 'Cymbal', value: getLevel(min, max) },
    { type: 'Accessory', value: getLevel(min, max) },
    { type: 'Melody1', value: getLevel(min, max) },
    { type: 'Melody2', value: getLevel(min, max) },
    { type: 'Instrument', value: getLevel(min, max) },
    { type: 'Soundscape', value: getLevel(min, max) },
    { type: 'Texture', value: getLevel(min, max) },
    { type: 'Sprites', value: getLevel(min, max) },
    { type: 'Binaural', value: getLevel(min, max) },
  ];

  return (
    <section className='tracks'>
      {tracks.map((track, i) => {
        const { type, value } = track;
        return <Track key={i} type={type} value={value} />;
      })}
    </section>
  );
};

export default Tracks;
