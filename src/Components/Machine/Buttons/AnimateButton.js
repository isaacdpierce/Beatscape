import React, { useContext } from 'react';
import MachineContext from 'Context/MachineContext';
import SetMachineContext from 'Context/SetMachineContext';
import LinkButton from './Button';

const AnimateButton = () => {
  const { isAnimated } = useContext(MachineContext);
  const setState = useContext(SetMachineContext);

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
