import { useEffect, useContext, useReducer } from 'react';
import MachineContext from 'Context/MachineContext';
import SetMachineContext from 'Context/SetMachineContext';
import reducer from 'Assets/reducers/reducer.js';
import {
  makeHTMLAudio,
  getNewAudio,
  roundCorrect,
} from 'Assets/helpers/helpers';
import useAudioContext from 'Assets/hooks/useAudioContext';

const getPanNode = audioCtx => {
  if (!audioCtx.createStereoPanner) {
    return audioCtx.createPanner();
  }
  return audioCtx.createStereoPanner();
};

export default ({ pan, sound, volume, type } = {}) => {
  const audioState = {
    vol: 0,
    stereo: 0,
    audio: undefined,
  };
  const { audioContext } = useContext(useAudioContext);
  const { isPlaying, spriteData, environmentData, musicTimer } = useContext(
    MachineContext
  );
  const setState = useContext(SetMachineContext);
  const [{ vol, stereo, audio }, setAudioState] = useReducer(
    reducer,
    audioState
  );

  useEffect(() => {
    if (sound) {
      setState({ isLoading: true });
      setAudioState({ audio: makeHTMLAudio(sound, type) });
    }
    // eslint-disable-next-line
  }, [sound]);

  useEffect(() => {
    if (audio) {
      const source = audioContext.createMediaElementSource(audio);
      const gainNode = audioContext.createGain();
      const panNode = getPanNode(audioContext);

      setAudioState({ vol: gainNode });
      setAudioState({ stereo: panNode });

      source.connect(gainNode);
      gainNode.connect(panNode);
      panNode.connect(audioContext.destination);

      gainNode.gain.value = volume;

      return () => {
        source.disconnect();
        panNode.disconnect();
        gainNode.disconnect();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audio]);

  useEffect(() => {
    if (stereo && audioContext.createStereoPanner) {
      stereo.pan.value = pan;
    } else if (stereo && audioContext.createStereoPanner) {
      stereo.panningModel = 'equalpower';
      stereo.setPosition(pan, 0, 1 - Math.abs(pan));
    }
    // eslint-disable-next-line
    }, [pan, stereo]);

  useEffect(() => {
    if (vol) {
      vol.gain.value = volume;
    }
  }, [vol, volume]);

  useEffect(() => {
    if (audio) {
      audio.addEventListener('loadeddata', () => {
        // console.log(`${audio} loaded`);
        const endLoader = setTimeout(() => {
          setState({ isLoading: false });
        }, 1000);
        return () => clearTimeout(endLoader);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audio]);

  useEffect(() => {
    if (audio) {
      audio.onended = () => {
        // console.log(`${type} ended`);
        const newAudio = getNewAudio(type, spriteData, environmentData);
        setAudioState({ audio: newAudio });
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audio]);

  useEffect(() => {
    if (audio && !isPlaying) {
      audio.pause();
    }
    // eslint-disable-next-line
  }, [audio, isPlaying]);

  useEffect(() => {
    const setTiming = async () => {
      if (audio && isPlaying) {
        if (type === 'snare') {
          const timer = await setTimeout(() => {
            setState({
              musicTimer: audio.currentTime + 0.01,
            });
          }, 2000);
          return () => clearTimeout(timer);
        }

        // TODO - set timing of tracks to match universal timer
        if (type !== 'sprites' && type !== 'environment' && type !== 'snare') {
          audio.currentTime = musicTimer;
          console.log(`${type} = ${audio.currentTime}`);
          console.log(musicTimer);
        }
      }
    };
    setTiming();
    // eslint-disable-next-line
  }, [isPlaying]);

  return null;
};
