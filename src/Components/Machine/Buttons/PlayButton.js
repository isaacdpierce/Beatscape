import React, { useContext } from 'react';
import MachineContext from 'Context/MachineContext';
import LinkButton from './Button';

const PlayButton = () => {
  const { isPlaying, setState } = useContext(MachineContext);

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
