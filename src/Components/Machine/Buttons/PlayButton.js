import React, { useContext } from 'react';
import MachineContext from 'Context/MachineContext';
import LinkButton from './Button';

const PlayButton = () => {
  const { togglePlay, isPlaying } = useContext(MachineContext);
  return (
    <>
      <LinkButton
        text={isPlaying ? 'Pause' : 'Play'}
        handleClick={togglePlay}
      />
    </>
  );
};

export default PlayButton;
