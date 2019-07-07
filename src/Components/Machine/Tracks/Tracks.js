import React, { useContext, useState, useEffect } from 'react';
import Slider from './Slider';
import MachineContext from 'Context/MachineContext';
import { Howl } from 'howler';

import { useTrackList } from 'Assets/hooks/useTrackList';
import Oscillator from 'Components/Oscillator/Oscillator';

import './Tracks.css';

const Tracks = () => {
  const { data, isPlaying, isAnimated } = useContext(MachineContext);
  const [sineFrequency, setSineFrequency] = useState(0);
  const [sineVolume, setSineVolume] = useState(0.05);
  const [sounds, setSounds] = useState(undefined);
  const [tracks, setTracks] = useState(undefined);

  const trackList = useTrackList(sounds, Oscillator);

  useEffect(() => {
    if (data) {
      const { stems } = data.soundscape_tracks;
      const soundList = stems.map(stem => {
        const { urls } = stem;
        return new Howl({
          src: urls[0],
          autoplay: false,
          loop: true,
          volume: 0.5,
        });
      });
      setSounds(soundList);
    }
  }, [data]);

  useEffect(() => {
    if (sounds) {
      setTracks(trackList);
    }
  }, [sounds, trackList]);

  const changeSineVolume = value => {
    setSineVolume(value);
  };

  const changeSineFrequency = value => {
    setSineFrequency(value);
  };

  return (
    <section className={isAnimated ? 'tracks animated' : 'tracks'}>
      {isAnimated && (
        <section className='animatedCover'>
          <p>Tracks Animated - Click stop animate to change levels</p>
        </section>
      )}
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
