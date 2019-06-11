import React, { useContext } from 'react';
import LinkButton from './Button';
import MachineContext from 'context/MachineContext';

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
