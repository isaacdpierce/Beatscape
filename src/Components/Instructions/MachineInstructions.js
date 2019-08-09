import React from 'react';
import Instructions from 'Components/Instructions/Instructions';
import instructionsText from 'Components/Instructions/instructionsText';

const MachineInstructions = () => (
  <>
    <Instructions
      className='animate-instructions'
      text={instructionsText.animate}
    />
    <Instructions
      className='volume-instructions'
      text={instructionsText.volume}
    />
    <Instructions
      className='stereo-instructions'
      text={instructionsText.stereo}
    />
    <Instructions
      className='binaural-instructions'
      text={instructionsText.binaural}
    />
    <Instructions
      className='soundscapes-instructions'
      text={instructionsText.soundscapes}
    />
  </>
);

export default MachineInstructions;
