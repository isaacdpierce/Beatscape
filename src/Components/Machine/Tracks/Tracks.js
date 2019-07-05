import React, { useContext, useState, useEffect } from 'react';
import Slider from './Slider';
import MachineContext from 'Context/MachineContext';

import { makeTrackList, makeSoundList } from 'Assets/helpers/helpers';
import Oscillator from 'Components/Oscillator/Oscillator';

import './Tracks.css';

const Tracks = () => {
  const { data, isPlaying } = useContext(MachineContext);
  const [sineFrequency, setSineFrequency] = useState(60);
  const [sineVolume, setSineVolume] = useState(0.2);
  const [sounds, setSounds] = useState(undefined);
  const [tracks, setTracks] = useState(undefined);

  // TODO Move this to new component for adjusting frequency
  const changeSineFrequency = value => {
    setSineFrequency(value);
  };

  console.log('Sine Freq is ' + sineFrequency);

  useEffect(() => {
    if (data) {
      const { stems } = data.soundscape_tracks;
      const soundList = makeSoundList(stems);
      setSounds(soundList);
    }
  }, [data]);

  useEffect(() => {
    if (sounds) {
      const trackList = makeTrackList(sounds, Oscillator);
      setTracks(trackList);
    }
  }, [sounds]);

  const changeSineVolume = value => {
    setSineVolume(value);
  };

  return (
    <section className='tracks'>
      {tracks &&
        tracks.map((track, i) => {
          const { type, animate, sound } = track;

          return (
            <Slider
              key={i}
              type={type}
              animate={animate}
              changeSineVolume={changeSineVolume}
              changeSineFrequency={changeSineFrequency}
              sound={sound}
            />
          );
        })}
      {isPlaying && (
        <Oscillator
          frequency={sineFrequency}
          type={'sine'}
          volume={sineVolume}
        />
      )}
    </section>
  );
};

export default Tracks;
