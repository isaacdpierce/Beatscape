import React, { useContext, useState, useEffect } from 'react';
import Instructions from 'Components/Instructions/Instructions';
import MachineContext from 'Context/MachineContext';
import instructionsText from 'Components/Instructions/instructionsText';

const MachineInstructions = () => {
  const { showInstructions } = useContext(MachineContext);
  const [showClass, setShowClass] = useState('');

  useEffect(() => {
    if (showInstructions) {
      setShowClass('is_showing');
    } else {
      setShowClass('');
    }
  }, [showInstructions]);
  return (
    <>
      <Instructions
        className={`animate-instructions ${showClass}`}
        text={instructionsText.animate}
      />
      <Instructions
        className={`volume-instructions ${showClass}`}
        text={instructionsText.volume}
      />
      <Instructions
        className={`stereo-instructions ${showClass}`}
        text={instructionsText.stereo}
      />
      <Instructions
        className={`binaural-instructions ${showClass}`}
        text={instructionsText.binaural}
      />
      <Instructions
        className={`soundscapes-instructions ${showClass}`}
        text={instructionsText.soundscapes}
      />
    </>
  );
};

export default MachineInstructions;
