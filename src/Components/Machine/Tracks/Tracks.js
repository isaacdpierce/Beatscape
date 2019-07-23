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
  const [sine, setSine] = useState(undefined);
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
    if (isPlaying) {
      setSine(
        <Oscillator
          frequency={sineFrequency}
          type='sine'
          volume={sineVolume}
          isPlaying={isPlaying}
        />
      );
    }
  }, [isPlaying, sineFrequency, sineVolume]);

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
    console.log(`changeSineFrequency called`);
  };

  return (
    <StyledTracks className={isAnimated && 'animated'}>
      {isAnimated && <TrackCover />}
      {musicSliders}
      {sine}
      <Slider
        type='Binaural'
        animate={false}
        changeSineVolume={changeSineVolume}
        changeSineFrequency={changeSineFrequency}
      />
    </StyledTracks>
  );
};

export default Tracks;
