import { useEffect, useContext, useState } from 'react';

import useAudioContext from 'Context/useAudioContext';

export default ({ pan, sound, volume, type } = {}) => {
  const [vol, setVol] = useState(undefined);
  const [stereo, setStereo] = useState(undefined);
  const [audio, setAudio] = useState(undefined);

  const { audioContext } = useContext(useAudioContext);
  const audioHTML = new Audio();
  audioHTML.src = sound;

  useEffect(() => {
    console.log(audioHTML);

    const myAudio = audioContext.createMediaElementSource(audioHTML);
    const gainNode = audioContext.createGain();
    const panNode = audioContext.createStereoPanner();

    myAudio.connect(audioContext.destination);

    gainNode.connect(audioContext.destination);
    gainNode.gain.value = volume;

    panNode.connect(audioContext.destination);
    panNode.pan.value = pan;
    panNode.type = type;

    // panNode.start();
    panNode.connect(gainNode);

    setVol(gainNode);
    setStereo(panNode);
    setAudio(myAudio);

    return () => {
      myAudio.stop();
      myAudio.disconnect();
      panNode.stop();
      panNode.disconnect();
      gainNode.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (audio) {
      stereo.pan.value = pan;
    }
  }, [audio, pan, stereo]); // only trigger this effect when pan changes

  useEffect(() => {
    if (audio) {
      vol.gain.value = volume;
      console.log(volume);
    }
  }, [audio, vol, volume]); // only trigger this effect when volume changes

  return null;
};
