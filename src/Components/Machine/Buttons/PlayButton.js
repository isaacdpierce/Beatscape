import React, { useContext } from 'react';
import MachineContext from 'Context/MachineContext';
import LinkButton from './Button';

const PlayButton = () => {
  const { state, setState } = useContext(MachineContext);
  const { isPlaying } = state;

  const togglePlay = () => {
    setState({ isAnimated: false });
    setState({ isPlaying: !isPlaying });
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
