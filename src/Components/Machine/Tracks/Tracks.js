import React, { useContext, useState, useEffect } from 'react';
import MachineContext from 'Context/MachineContext';
import Oscillator from 'Components/Machine/Tracks/Oscillator/Oscillator';
import useEmptySliders from 'Assets/hooks/useEmptySliders';
import { makeTracks, getRandomIndex } from 'Assets/helpers/helpers';
import Slider from './Slider';
import TrackCover from './TrackCover';
import StyledTracks from './StyledTracks.js';

const Tracks = () => {
  const {
    musicData,
    isPlaying,
    isAnimated,
    spriteData,
    setIsError,
    setErrorMsg,
    environmentData,
  } = useContext(MachineContext);
  const [tracks, setTracks] = useState(undefined);
  const [spriteTrack, setSpriteTrack] = useState(undefined);
  const [environmentTrack, setEnvironmentTrack] = useState(undefined);
  const [musicSliders, setMusicSliders] = useState(useEmptySliders);
  const [sineVolume, setSineVolume] = useState(0.05);
  const [sineFrequency, setSineFrequency] = useState(60);

  useEffect(() => {
    if (musicData) {
      const { stems } = musicData;
      const trackList = makeTracks(stems);
      setTracks(trackList);
    }
  }, [musicData]);

  useEffect(() => {
    if (spriteData) {
      const spriteStem = spriteData[getRandomIndex(spriteData)];
      setSpriteTrack(spriteStem);
    }
    // eslint-disable-next-line
  }, [spriteData]);

  useEffect(() => {
    if (environmentData) {
      const environmentStem = environmentData[getRandomIndex(environmentData)];

      setEnvironmentTrack(environmentStem);
    }
    // eslint-disable-next-line
  }, [environmentData]);

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
