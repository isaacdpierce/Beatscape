import { useEffect, useContext, useState } from 'react';
import MachineContext from 'Context/MachineContext';

import useAudioContext from 'Context/useAudioContext';

export default ({ pan, sound, volume, type } = {}) => {
  const { isPlaying, data } = useContext(MachineContext);
  const [vol, setVol] = useState(undefined);
  const [stereo, setStereo] = useState(undefined);

  const { audioContext } = useContext(useAudioContext);

  useEffect(() => {
    if (audioContext) {
      const makeHTMLAudio = file => {
        const audioHTML = new Audio();
        if (!file) {
          return null;
        }
        audioHTML.src = file;
        audioHTML.crossOrigin = 'anonymous';
        audioHTML.autoplay = true;
        return audioHTML;
      };

      const source = audioContext.createMediaElementSource(
        makeHTMLAudio(sound)
      );
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
  }, [audioContext]);

  useEffect(() => {
    if (stereo) {
      stereo.pan.value = pan;
      // console.log(`Pan in ${type} is ${pan}`);
    }
  }, [pan, stereo, type]);

  useEffect(() => {
    if (vol) {
      vol.gain.value = volume;
      // console.log(`Volume in ${type} is ${volume}`);
    }
  }, [type, vol, volume]);

  useEffect(() => {
    if (!isPlaying) {
      audioContext.suspend().then(function() {
        // console.log(audioContext.state, audioContext.currentTime);
        // setOffset(audioContext.currentTime);
      });
    }
    if (isPlaying) {
      audioContext.resume().then(function() {
        // setOffset();
      });
    }
  }, [audioContext, isPlaying]);
  return null;
};

// TODO - set audio.currentTime to match audioContext.currentTime
// useEffect(() => {
//   // const ctxTime = audioContext.currentTime;

//   if (audio) {
//     if (audio.currentTime < audioContext.currentTime) {
//       audioContext.close();
//     } else {
//       audio.currentTime = audioContext.currentTime;
//     }

//     console.log(audio.currentTime);
//     console.log(`AudioContext time is ${audioContext.currentTime}`);
//   }
// }, [audio, audioContext, audioContext.currentTime]);

// const [environments, setEnvironment] = useState(undefined);
// const [sprites, setSprites] = useState(undefined);
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
