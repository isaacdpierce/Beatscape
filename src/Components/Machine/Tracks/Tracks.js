import React, { useContext, useState, useEffect } from 'react';
import MachineContext from 'Context/MachineContext';
import Oscillator from 'Components/Machine/Tracks/Oscillator/Oscillator';
import useEmptySliders from 'Assets/hooks/useEmptySliders';
import { makeTracks } from 'Assets/helpers/helpers';
import Slider from './Slider';
import TrackCover from './TrackCover';
import StyledTracks from './StyledTracks.js';

const Tracks = () => {
  const { data, isPlaying, isAnimated } = useContext(MachineContext);
  const [tracks, setTracks] = useState(undefined);
  const [musicSliders, setMusicSliders] = useState(useEmptySliders);
  const [sineVolume, setSineVolume] = useState(0.05);
  const [sineFrequency, setSineFrequency] = useState(60);

  useEffect(() => {
    if (data) {
      const { stems } = data;
      const trackList = makeTracks(stems);
      setTracks(trackList);
    }
  }, [data]);

  useEffect(() => {
    if (tracks) {
      const audioList = tracks.map((track, index) => {
        const { stemName, animate, sound } = track;
        return (
          <Slider key={index} type={stemName} animate={animate} sound={sound} />
        );
      });
      setMusicSliders(audioList);
    }
  }, [tracks]);

  const changeSineVolume = val => {
    setSineVolume(val);
  };

  const changeSineFrequency = val => {
    setSineFrequency(val);
  };

  return (
    <StyledTracks className={isAnimated && 'animated'}>
      {isAnimated && <TrackCover />}
      {musicSliders}
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
