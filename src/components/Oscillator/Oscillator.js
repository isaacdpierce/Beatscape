import React, { useEffect, useContext, useState } from 'react';

import useAudioContext from 'context/useAudioContext';

// TODO create context variable for volume
// TODO Create UI controller for volume control or frequency
export default ({ frequency = 60, type = 'sine' } = {}) => {
  const { audioContext } = useContext(useAudioContext);
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  oscillator.type = type; // sine wave — other values are 'square', 'sawtooth', 'triangle' and 'custom'
  oscillator.frequency.value = frequency; // value in hertz
  gainNode.gain.value = 0.5;
  oscillator.start();
  return null;
};

// =

// useEffect(() => {
//   // create Oscillator and gain node
//   const oscillator = audioContext.createOscillator();
//   const gainNode = audioContext.createGain();

//   // connect oscillator to gain node to speakers
//   oscillator.connect(gainNode);
//     gainNode.connect(audioContext.destination);

//     // set options for the oscillator
//     oscillator.frequency.value = frequency;
//     oscillator.type = type;
//     oscillator.detune.setValueAtTime(100, audioContext.currentTime);

//     oscillator.start(0);
//     oscillator.connect(audioContext.destination);

//     setOscillator(oscillator);

//     return () => {
//       oscillator.stop();
//       oscillator.disconnect();
//     };
//   }, []);

//   useEffect(() => {
//     if (oscillator) {
//       oscillator.frequency.value = frequency;
//     }
//   }, [frequency]); // only trigger this effect when frequency changes

//   return null;
// };
