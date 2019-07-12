import React, { useContext } from 'react';
import MachineContext from 'Context/MachineContext';
import LinkButton from './Button';

const AnimateButton = () => {
  const { toggleAnimation, isAnimated } = useContext(MachineContext);
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
