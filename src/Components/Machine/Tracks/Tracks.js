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
    data,
    isPlaying,
    isAnimated,
    spriteData,
    environmentData,
    setIsError,
    setErrorMsg,
  } = useContext(MachineContext);
  const [tracks, setTracks] = useState(undefined);
  const [spriteTrack, setSpriteTrack] = useState(undefined);
  const [environmentTrack, setEnvironmentTrack] = useState(undefined);
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
    if (!spriteData.sprite_url) {
      setIsError(true);
      setErrorMsg('Could not get scene data for this selection.');
    } else {
      const spriteStem = spriteData[getRandomIndex(spriteData)].sprite_url;
      setSpriteTrack(spriteStem);
    }
    // eslint-disable-next-line
  }, [spriteData]);

  useEffect(() => {
    if (!environmentData.environment_url) {
      setIsError(true);
      setErrorMsg('Could not get scene data for this selection.');
    } else {
      const environmentStem =
        environmentData[getRandomIndex(environmentData)].environment_url;
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
