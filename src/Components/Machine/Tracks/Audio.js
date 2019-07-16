import { useEffect, useContext, useState } from 'react';
import MachineContext from 'Context/MachineContext';

import useAudioContext from 'Context/useAudioContext';

export default ({ pan, sound, volume, type } = {}) => {
  const { isPlaying, data } = useContext(MachineContext);
  const [offset, setOffset] = useState(0);
  const [vol, setVol] = useState(undefined);
  const [stereo, setStereo] = useState(undefined);
  const [audio, setAudio] = useState(undefined);
  const [environments, setEnvironment] = useState(undefined);
  const [sprites, setSprites] = useState(undefined);

  const { audioContext } = useContext(useAudioContext);

  // Pseudo code to get Sprites and environments as separate state
  // Because they will update often - they need a separate creation function
  // useEffect(() => {
  //   if (data) {
  //     console.log(data);

  //     const { stems } = data;
  //     stems.map(stem => {
  //       if (stem.stemName === 'environments') {
  //         setEnvironment(stems.sources[0]);
  //       }
  //       if (stems.stemName === 'sprites') {
  //         setSprites(stems.sources[0]);
  //       }
  //     });
  //   }
  // }, [data]);

  useEffect(() => {
    const audioHTML = new Audio();
    audioHTML.src = sound;
    audioHTML.crossOrigin = 'anonymous';
    // ? MAYBE this will get it to play  - set conditionally?
    audioHTML.autoplay = true;

    const source = audioContext.createMediaElementSource(audioHTML);
    const gainNode = audioContext.createGain();
    const panNode = audioContext.createStereoPanner();

    source.connect(gainNode);

    gainNode.connect(audioContext.destination);
    gainNode.gain.value = volume;

    panNode.connect(gainNode);
    panNode.pan.value = pan;
    panNode.type = type;

    panNode.connect(gainNode);

    setVol(gainNode);
    setStereo(panNode);
    setAudio(source);

    return () => {
      source.disconnect();
      panNode.disconnect();
      gainNode.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (audio) {
      stereo.pan.value = pan;
      console.log(`Pan in Audio.js is ${pan}`);
    }
  }, [audio, pan, stereo]); // only trigger this effect when pan changes

  useEffect(() => {
    if (audio) {
      vol.gain.value = volume;
      console.log(`Volume in Audio.js is ${volume}`);
    }
  }, [audio, vol, volume]); // only trigger this effect when volume changes

  useEffect(() => {
    if (!isPlaying) {
      audioContext.suspend().then(function() {
        // console.log(audioContext.state, audioContext.currentTime);
        setOffset(audioContext.currentTime);
      });
    }
    if (isPlaying) {
      audioContext.resume().then(function() {
        // setOffset();
      });
    }
  }, [audioContext, isPlaying, offset]); // only trigger this effect when volume changes

  return null;
};
