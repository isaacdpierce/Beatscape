import { useEffect, useContext, useState } from 'react';
import useAudioContext from 'Context/useAudioContext';

export default ({ frequency, type = 'sine', volume } = {}) => {
  const [oscillator, setOscillator] = useState(undefined);
  const [vol, setVol] = useState(undefined);

  const { audioContext } = useContext(useAudioContext);

  useEffect(() => {
    const osc = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    gainNode.connect(audioContext.destination);
    gainNode.gain.value = volume;

    osc.frequency.value = frequency;
    osc.type = type;

    osc.start();
    osc.connect(gainNode);

    setVol(gainNode);
    setOscillator(osc);

    return () => {
      osc.stop();
      osc.disconnect();
      gainNode.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (oscillator) {
      oscillator.frequency.value = frequency;
    }
  }, [frequency, oscillator]); // only trigger this effect when frequency changes

  useEffect(() => {
    if (vol) {
      vol.gain.value = volume;
    }
  }, [vol, volume]); // only trigger this effect when volume changes

  return null;
};
