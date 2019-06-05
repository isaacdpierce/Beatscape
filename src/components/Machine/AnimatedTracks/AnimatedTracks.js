import React, { useState, useEffect } from 'react';
import tracksList from '../../../context/tracksList';

import AnimatedTrack from './AnimatedTrack';

import '../Tracks/Tracks.css';
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

  return (
    <section className='tracks'>
      <span className='temporary-title'>Animated Component</span>
      {tracksList.map((track, i) => {
        const { type, value } = track;
        return <AnimatedTrack key={i} type={type} value={level} />;
      })}
    </section>
  );
};

export default Tracks;
