import React, { useContext } from 'react';
import LinkButton from '../LinkButton';
import MachineContext from '../../../context/MachineContext';

const AnimateButton = () => {
  const { toggleAnimation, isAnimated } = useContext(MachineContext);
  return (
    <>
      <LinkButton
        text={isAnimated ? 'Stop animation' : 'Animate'}
        handleClick={toggleAnimation}
      />
    </>
  );
};

export default AnimateButton;
