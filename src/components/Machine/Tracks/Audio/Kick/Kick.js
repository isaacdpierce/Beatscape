import React, { useContext, useState, useEffect } from 'react';
import Slider from '../../Slider';
import { Howl, Howler } from 'howler';

import { getRandomFloat } from 'assets/helpers/helpers';
import MachineContext from 'context/MachineContext';

import kick from 'assets/audio/dusty-road/kick.mp3';

const Kick = () => {
  const { isPlaying } = useContext(MachineContext);
  const [volume, setVolume] = useState(0.5);

  const kickTrack = new Howl({
    src: [kick],
    autoplay: false,
    loop: true,
    volume: volume,
  });

  useEffect(() => {
    console.log(
      `isPlaying in Kick useEffect is set to: ${isPlaying} volume is ${volume}`
    );
    isPlaying && kickTrack.play();

    return () => kickTrack.mute(true);
  }, [isPlaying]);

  // const setInnerVolume = volume => {
  //   console.log('Volume called setting volume to ' + volume);

  // };

  // useEffect(() => {
  //   console.log(`isPlaying in Kick useEffect volume is ${volume}`);
  //   setInnerVolume(volume);
  // }, [volume]);

  const changeVolume = value => {
    setVolume(value);
  };

  kickTrack.volume(volume);

  return (
    <Slider
      changeVolume={changeVolume}
      type='kick'
      animate={true}
      nextLevel={getRandomFloat(0, volume)}
    />
  );
};

export default Kick;
