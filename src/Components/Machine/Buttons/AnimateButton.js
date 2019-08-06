import React, { useContext } from 'react';
import MachineContext from 'Context/MachineContext';
import LinkButton from './Button';

const AnimateButton = () => {
  const { isAnimated, setState } = useContext(MachineContext);

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
