import React, { useContext } from 'react';
import MachineContext from 'Context/MachineContext';
import LinkButton from './Button';

const AnimateButton = () => {
  const { state, setState } = useContext(MachineContext);
  const { isAnimated } = state;

  const toggleAnimation = () => {
    setState({ isAnimated: !isAnimated });
  };

  return (
    <>
      <LinkButton
        text={isAnimated ? 'Stop animate' : 'Animate'}
        handleClick={toggleAnimation}
      />
    </>
  );
};

export default AnimateButton;
