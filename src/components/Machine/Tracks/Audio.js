import React, { useEffect, useContext, useState } from 'react';
import MachineContext from 'context/MachineContext';
import kick from 'assets/audio/dusty-road/kick.mp3';

import { Howl, Howler } from 'howler';

const Audio = (type, volume) => {
  const { isPlaying } = useContext(MachineContext);

  const playTracks = () => {
    console.log('Tracks Playing!');
  };

  useEffect(() => {
    isPlaying && playTracks();
  }, [isPlaying]);

  return null;
};

export default Audio;
