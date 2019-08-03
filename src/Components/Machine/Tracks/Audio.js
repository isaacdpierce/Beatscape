import { useEffect, useContext, useState } from 'react';
import MachineContext from 'Context/MachineContext';
import { getRandomIndex, getRandomInteger } from 'Assets/helpers/helpers';

import useAudioContext from 'Context/useAudioContext';

const useHTMLAudio = (sound, type) => {
  const audioHTML = new Audio();

  audioHTML.src = sound;
  audioHTML.crossOrigin = 'anonymous';
  // Set loop to false if either environment or sprite
  audioHTML.loop = type !== 'environment' && type !== 'sprites';
  audioHTML.preload = true;

  return audioHTML;
};

export default ({ pan, sound, volume, type } = {}) => {
  const { isPlaying, spriteData, environmentData } = useContext(MachineContext);
  const [vol, setVol] = useState(undefined);
  const [stereo, setStereo] = useState(0);
  const [audio, setAudio] = useState(undefined);

  const { audioContext } = useContext(useAudioContext);

  useEffect(() => {
    if (audioContext && sound) {
      setAudio(useHTMLAudio(sound, type));
    }
  }, [audioContext, sound, type]);

  useEffect(() => {
    if (audio) {
      audio.onended = () => {
        if (type === 'sprites') {
          console.log(`${audio.src} ended`);
          const spriteStem = spriteData[getRandomIndex(spriteData)];
          setTimeout(() => {
            setAudio(useHTMLAudio(spriteStem, 'sprites'));
          }, getRandomInteger(1000, 20000));
        }
        if (type === 'environments') {
          const environmentStem =
            environmentData[getRandomIndex(environmentData)];
          setTimeout(() => {
            setAudio(useHTMLAudio(environmentStem, 'environments'));
          }, getRandomInteger(1000, 20000));
        }
      };
    }
  }, [audio, environmentData, isPlaying, spriteData, type]);

  useEffect(() => {
    if (audio) {
      const source = audioContext.createMediaElementSource(audio);
      const gainNode = audioContext.createGain();
      const panNode = audioContext.createStereoPanner();

      setVol(gainNode);
      setStereo(panNode);

      source.connect(gainNode);
      gainNode.connect(panNode);
      panNode.connect(audioContext.destination);

      gainNode.gain.value = volume;
      panNode.pan.value = pan;

      return () => {
        source.disconnect();
        panNode.disconnect();
        gainNode.disconnect();
      };
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audio]);

  useEffect(() => {
    if (stereo) {
      stereo.pan.value = pan;
    }
  }, [pan, stereo, type]);

  useEffect(() => {
    if (vol) {
      vol.gain.value = volume;
    }
  }, [type, vol, volume]);

  useEffect(() => {
    if (!isPlaying && audio) {
      audioContext.suspend().then(() => {
        audio.pause();
        // console.log(audioContext.state, audioContext.currentTime);
        // console.log(`paused audio time = ${audio.currentTime}`);
      });
    }
    if (isPlaying) {
      audioContext.resume().then(() => {
        audio.play();
        // console.log(audioContext.state, audioContext.currentTime);
        // console.log(`play audio time = ${audio.currentTime}`);
      });
    }
  }, [audio, audioContext, isPlaying]);
  return null;
};
