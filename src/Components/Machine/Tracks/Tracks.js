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
      if (spriteData.length === 0) {
        setIsError(true);
        setErrorMsg(`Couldn't load sprites.`);
      }
      const spritesArray = spriteData.map(sprite => sprite.sprite_url);
      const spriteStem = spritesArray[getRandomIndex(spritesArray)];

      setSpriteTrack(spriteStem);
    }
    return () => {
      setIsError(false);
      setErrorMsg('');
    };
    // eslint-disable-next-line
  }, [spriteData]);

  useEffect(() => {
    if (environmentData) {
      if (environmentData.length === 0) {
        setIsError(true);
        setErrorMsg(`Couldn't load environments.`);
      }
      const environmentsArray = environmentData.map(
        environment => environment.environment_url
      );
      const environmentStem =
        environmentsArray[getRandomIndex(environmentsArray)];
      setEnvironmentTrack(environmentStem);
    }
    return () => {
      setIsError(false);
      setErrorMsg('');
    };
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
      <Slider type='sprites' animate sound={spriteTrack} />
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
