import React, { useContext } from 'react';
import MachineContext from 'Context/MachineContext';
import LinkButton from './Button';

const AnimateButton = () => {
  const { isAnimated, setIsAnimated } = useContext(MachineContext);

  const toggleAnimation = () => {
    setIsAnimated(!isAnimated);
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
