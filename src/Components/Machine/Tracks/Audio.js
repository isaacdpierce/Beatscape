import { useEffect, useContext, useState } from 'react';
import MachineContext from 'Context/MachineContext';

import useAudioContext from 'Context/useAudioContext';

export default ({ pan, sound, volume, type } = {}) => {
  const { isPlaying, setIsError } = useContext(MachineContext);
  const [vol, setVol] = useState(undefined);
  const [stereo, setStereo] = useState(0);
  const [audio, setAudio] = useState(undefined);

  const { audioContext } = useContext(useAudioContext);

  useEffect(() => {
    if (audioContext && sound) {
      const makeHTMLAudio = url => {
        const audioHTML = new Audio();
        if (!url) {
          setIsError(true);
          return null;
        }

        audioHTML.src = url;
        audioHTML.crossOrigin = 'anonymous';
        audioHTML.autoplay = true;
        // Set loop to false if either environment or sprite
        audioHTML.loop = type !== 'environment' && type !== 'sprites';
        audioHTML.preload = true;
        return audioHTML;
      };
      setAudio(makeHTMLAudio(sound));
    }
  }, [audioContext, setIsError, sound, type]);

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
        // console.log(audioContext.state, audioContext.currentTime);
      });
    }
    if (isPlaying) {
      audioContext.resume().then(() => {});
    }
  }, [audio, audioContext, isPlaying]);
  return null;
};

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
