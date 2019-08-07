import React, { useContext } from 'react';
import MachineContext from 'Context/MachineContext';
import SetMachineContext from 'Context/SetMachineContext';
import LinkButton from './Button';

const PlayButton = () => {
  const { isPlaying } = useContext(MachineContext);
  const setState = useContext(SetMachineContext);

  const togglePlay = () => {
    setState({ isAnimated: false, isPlaying: !isPlaying });
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
