import React, { useContext, useState, useEffect } from 'react';
import MachineContext from 'Context/MachineContext';
import Oscillator from 'Components/Machine/Tracks/Oscillator/Oscillator';
import useEmptySliders from 'Assets/hooks/useEmptySliders';
import Slider from './Slider';
import TrackCover from './TrackCover';
import StyledTracks from './StyledTracks.js';

const Tracks = () => {
  const {
    musicTracks,
    isPlaying,
    isAnimated,
    spriteTrack,
    environmentTrack,
  } = useContext(MachineContext);
  const [musicSliders, setMusicSliders] = useState(useEmptySliders);
  const [sineVolume, setSineVolume] = useState(0.05);
  const [sineFrequency, setSineFrequency] = useState(60);

  useEffect(() => {
    if (musicTracks) {
      const audioList = musicTracks.map((track, index) => {
        const { stemName, animate, sound } = track;
        return (
          <Slider key={index} type={stemName} animate={animate} sound={sound} />
        );
      });
      setMusicSliders(audioList);
    }
  }, [musicTracks]);

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
        type='sprites'
        animate
        sound={spriteTrack}
        animatedMaxVolume={0.5}
      />
      <Slider type='environment' animate={false} sound={environmentTrack} />
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
