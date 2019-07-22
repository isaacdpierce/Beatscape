import React, { useContext, useState, useEffect } from 'react';
import MachineContext from 'Context/MachineContext';
import Oscillator from 'Components/Machine/Tracks/Oscillator/Oscillator';
import trackTypes from 'Assets/audio/trackTypes';
import Slider from './Slider';
import { TrackCover, errorColor } from './TrackCover';

import StyledTracks from './StyledTracks.js';

const Tracks = () => {
  const { data, isPlaying, isAnimated, isLoading, isError } = useContext(
    MachineContext
  );
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
    <StyledTracks className={isAnimated && 'animated'}>
      {isError && (
        <TrackCover>
          <p style={errorColor}>
            Something went wrong... try another selection.
          </p>
        </TrackCover>
      )}
      {isAnimated && (
        <TrackCover>
          <p>Tracks Animated - Click stop animate to change levels</p>
        </TrackCover>
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
    </StyledTracks>
  );
};

export default Tracks;
