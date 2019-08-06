import { useEffect, useContext, useState } from 'react';
import useAudioContext from 'Context/useAudioContext';

export default ({ frequency, type, volume, isPlaying } = {}) => {
  const [oscillator, setOscillator] = useState(undefined);
  const [vol, setVol] = useState(undefined);

  const { audioContext } = useContext(useAudioContext);

  // useEffect(() => {
  //   if (volume) {
  //     console.log(volume);
  //   }
  // }, [volume]);

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
  }, [frequency, oscillator]);

  useEffect(() => {
    if (vol) {
      console.log(vol.gain.value);
      vol.gain.value = volume;
    }
  }, [vol, volume]);

  useEffect(() => {
    if (!isPlaying) {
      audioContext.suspend().then(() => {
        // console.log(audioContext.state, audioContext.currentTime);
      });
    }
    if (isPlaying) {
      audioContext.resume().then(() => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

  return null;
};
