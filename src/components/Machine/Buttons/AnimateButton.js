import React, { useContext } from 'react';
import LinkButton from './Button';
import MachineContext from '../../../context/MachineContext';

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
