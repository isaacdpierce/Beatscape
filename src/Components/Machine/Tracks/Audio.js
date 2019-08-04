import { useEffect, useContext, useState } from 'react';
import MachineContext from 'Context/MachineContext';
import useAwsAudio from 'Assets/hooks/useAwsAudio';
import { getRandomIndex, getRandomInteger } from 'Assets/helpers/helpers';

import useAudioContext from 'Context/useAudioContext';

export default ({ pan, sound, volume, type } = {}) => {
  const { audioContext } = useContext(useAudioContext);
  const [{ awsAudio }, setAwsUrl] = useAwsAudio();
  const { isPlaying } = useContext(MachineContext);
  const [vol, setVol] = useState(undefined);
  const [stereo, setStereo] = useState(0);
  const [audio, setAudio] = useState(undefined);

  let calls = 0;
  function iSuspectToBeLoopingInfititely() {
    calls += 1;
    if (calls > 100) {
      debugger;
    }
  }

  useEffect(() => {
    if (awsAudio) {
      setAudio(awsAudio);
    }
    // eslint-disable-next-line
  }, [awsAudio]);

  useEffect(() => {
    if (audioContext && sound) {
      // console.log(sound);

      setAwsUrl(sound);
    }
    // eslint-disable-next-line
  }, [sound]);

  useEffect(() => {
    if (audio) {
      // console.log(`${audio} type is ${type}`);

      const source = audioContext.createBufferSource();
      source.buffer = audio;
      const gainNode = audioContext.createGain();
      const panNode = audioContext.createStereoPanner();

      setVol(gainNode);
      setStereo(panNode);

      source.connect(gainNode);
      gainNode.connect(panNode);
      panNode.connect(audioContext.destination);

      iSuspectToBeLoopingInfititely();

      source.start();

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
        // console.log(audioContext.state, audioContext.currentTime);
        // console.log(`paused audio time = ${audio.currentTime}`);
      });
    }
    if (isPlaying) {
      audioContext.resume().then(() => {
        // console.log(audioContext.state, audioContext.currentTime);
        // console.log(`play audio time = ${audio.currentTime}`);
      });
    }
    // eslint-disable-next-line
  }, [audio, isPlaying]);
  return null;
};

// useEffect(() => {
//   if (awsAudio) {
//     setAudio(awsAudio);
//     audio.onended = () => {
//       if (type === 'sprites') {
//         console.log('sprite ended');

//         const spriteStem = spriteData[getRandomIndex(spriteData)];
//         setTimeout(() => {
//           setAwsUrl(spriteStem);
//         }, getRandomInteger(1000, 20000));
//       }
//       if (type === 'environments') {
//         const environmentStem =
//           environmentData[getRandomIndex(environmentData)];
//         setTimeout(() => {
//           setAwsUrl(environmentStem);
//         }, getRandomInteger(1000, 20000));
//       }
//     };
//   }
//   // eslint-disable-next-line
// }, [audio]);
