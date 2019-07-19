import React, { useContext, useState, useEffect } from 'react';
import MachineContext from 'Context/MachineContext';
import useAudioContext from 'Context/useAudioContext';
import Oscillator from 'Components/Oscillator/Oscillator';
import trackTypes from 'Assets/audio/trackTypes';
import Loader from 'Components/Loader/Loader';

import Slider from './Slider';

import './Tracks.css';

const Tracks = () => {
  const { data, isPlaying, isAnimated, isLoading } = useContext(MachineContext);
  const [sineFrequency, setSineFrequency] = useState(60);
  const [sineVolume, setSineVolume] = useState(0.05);
  const [tracks, setTracks] = useState(undefined);

  useEffect(() => {
    if (data) {
      const { stems } = data;
      const trackList = stems.map((stem, index) => {
        const { stemName, animate, sources } = stem;

        return {
          id: index + 1,
          stemName,
          animate,
          sound: sources[0],
        };
      });
      setTracks(trackList);
    }
  }, [data]);

  const changeSineVolume = val => {
    setSineVolume(val);
  };

  const changeSineFrequency = val => {
    setSineFrequency(val);
  };

  return (
    <section className={isAnimated ? 'tracks animated' : 'tracks'}>
      {/* isLoading && <Loader /> */}
      {isAnimated && (
        <section className='animatedCover'>
          <p>Tracks Animated - Click stop animate to change levels</p>
        </section>
      )}
      {tracks
        ? tracks.map((track, index) => {
            const { stemName, animate, sound } = track;
            return (
              <Slider
                key={index}
                type={stemName}
                animate={animate}
                sound={sound}
              />
            );
          })
        : trackTypes.map((track, index) => (
            <Slider
              key={index + 100}
              type={track}
              changeSineVolume={changeSineVolume}
              changeSineFrequency={changeSineFrequency}
            />
          ))}
      <Slider
        type='Binaural'
        animate={false}
        changeSineVolume={changeSineVolume}
        changeSineFrequency={changeSineFrequency}
      />
      <Oscillator
        frequency={sineFrequency}
        type='sine'
        volume={sineVolume}
        isPlaying={isPlaying}
      />
    </section>
  );
};

export default Tracks;
