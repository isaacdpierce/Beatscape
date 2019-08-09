import React, { useContext, useState, useEffect } from 'react';
import Instructions from 'Components/Instructions/Instructions';
import MachineContext from 'Context/MachineContext';
import instructionsText from 'Components/Instructions/instructionsText';

const MachineInstructions = () => {
  const { showInstructions } = useContext(MachineContext);
  const [instructions, setInstructions] = useState(undefined);
  const [showClass, setShowClass] = useState('');

  useEffect(() => {
    const setupInstructions = () => {
      if (showInstructions) {
        setShowClass('is_showing');
      } else {
        setShowClass('');
      }

      const InstructionList = Object.keys(instructionsText).map(
        (key, i) =>
          key !== 'drawer' && (
            <Instructions
              key={i}
              className={`${key}-instructions ${showClass}`}
              text={instructionsText[key]}
            />
          )
      );
      setInstructions(InstructionList);
    };
    setupInstructions();
    // eslint-disable-next-line
  }, [showInstructions]);

  return <>{instructions}</>;
};

export default MachineInstructions;
