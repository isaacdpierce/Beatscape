import React, { useContext, useState, useEffect } from 'react';
import MachineContext from 'Context/MachineContext';
import useAudioContext from 'Context/useAudioContext';
import Oscillator from 'Components/Oscillator/Oscillator';
import trackTypes from 'Assets/audio/trackTypes';
import Loader from 'Components/Loader/Loader';
import Audio from './Audio';
import Slider from './Slider';

import './Tracks.css';

const Tracks = () => {
  const { data, isPlaying, isAnimated, isLoading } = useContext(MachineContext);
  const [volume, setVolume] = useState(0.5);
  const [stereo, setStereo] = useState(1);
  const [sineFrequency, setSineFrequency] = useState(60);
  const [sineVolume, setSineVolume] = useState(0.05);
  const [tracks, setTracks] = useState(undefined);

  const { audioContext } = useContext(useAudioContext);

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

  const changeVolume = value => {
    setVolume(value);
  };

  const changeStereo = value => {
    setStereo(value);
  };

  const changeSineVolume = value => {
    setSineVolume(value);
  };

  const changeSineFrequency = value => {
    setSineFrequency(value);
  };

  return (
    <section className={isAnimated ? 'tracks animated' : 'tracks'}>
      {/* <Loader /> */}
      {isAnimated && (
        <section className='animatedCover'>
          <p>Tracks Animated - Click stop animate to change levels</p>
        </section>
      )}
      {tracks
        ? tracks.map((track, index) => {
            const { stemName, animate, sound } = track;

            return (
              <>
                <Audio
                  audioContext={audioContext}
                  key={index + 10}
                  pan={stereo}
                  sound={sound}
                  volume={volume}
                  type={stemName}
                  isPlaying={isPlaying}
                />

                <Slider
                  key={index}
                  type={stemName}
                  animate={animate}
                  sound={sound}
                  changeVolume={changeVolume}
                  changeStereo={changeStereo}
                />
              </>
            );
          })
        : trackTypes.map((track, index) => (
            <Slider
              key={index + 100}
              type={track}
              changeVolume={changeVolume}
              changeSineVolume={changeSineVolume}
              changeSineFrequency={changeSineFrequency}
              changeStereo={changeStereo}
            />
          ))}
      <Slider
        type='Binaural'
        animate={false}
        changeSineVolume={changeSineVolume}
        changeSineFrequency={changeSineFrequency}
        sound={Oscillator}
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
