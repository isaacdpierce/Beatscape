import React, { useContext } from 'react';
import MachineContext from 'Context/MachineContext';
import LinkButton from './Button';

const PlayButton = () => {
  const { setIsPlaying, isPlaying, setIsAnimated } = useContext(MachineContext);

  const togglePlay = () => {
    setIsAnimated(false);
    setIsPlaying(!isPlaying);
  };
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
