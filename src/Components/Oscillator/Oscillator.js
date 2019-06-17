import React, { useEffect, useContext, useState } from 'react';

import useAudioContext from 'context/useAudioContext';

// TODO create context variable for volume
// TODO Create UI controller for volume control or frequency

export default ({ frequency = 60, type = 'sine', volume } = {}) => {
  const [oscillator, setOscillator] = useState(undefined);

  const { audioContext } = useContext(useAudioContext);

  function dBFSToGain(dbfs) {
    return Math.pow(10, dbfs / 20);
  }

  useEffect(() => {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    gainNode.connect(audioContext.destination);
    gainNode.gain.value = volume;

    oscillator.frequency.value = frequency;
    oscillator.type = type;

    oscillator.start();
    oscillator.connect(gainNode);

    setOscillator(oscillator);

    return () => {
      oscillator.stop();
      oscillator.disconnect();
      gainNode.disconnect();
    };
  }, [volume]);

  useEffect(() => {
    if (oscillator) {
      oscillator.frequency.value = frequency;
    }
  }, [frequency]); // only trigger this effect when frequency changes

  return null;
};
