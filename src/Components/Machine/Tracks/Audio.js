import { useEffect, useContext, useState } from 'react';
import MachineContext from 'Context/MachineContext';
import { makeHTMLAudio, getNewAudio } from 'Assets/helpers/helpers';

import useAudioContext from 'Context/useAudioContext';

export default ({ pan, sound, volume, type } = {}) => {
  const { audioContext } = useContext(useAudioContext);
  const { isPlaying, spriteData, environmentData } = useContext(MachineContext);
  const [vol, setVol] = useState(undefined);
  const [stereo, setStereo] = useState(0);
  const [audio, setAudio] = useState(undefined);

  useEffect(() => {
    if (sound) {
      setAudio(makeHTMLAudio(sound, type));
    }
    // eslint-disable-next-line
  }, [sound]);

  useEffect(() => {
    if (audio) {
      audio.onended = () => {
        const newAudio = getNewAudio(type, spriteData, environmentData);
        setAudio(newAudio);
      };
    }
    // eslint-disable-next-line
  }, [audio]);

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
  }, [pan, stereo]);

  useEffect(() => {
    if (vol) {
      vol.gain.value = volume;
    }
  }, [vol, volume]);

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
    // eslint-disable-next-line
  }, [audio, isPlaying]);
  return null;
};
