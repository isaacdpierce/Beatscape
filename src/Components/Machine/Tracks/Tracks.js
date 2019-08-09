import React, { useContext, useState, useEffect } from 'react';
import MachineContext from 'Context/MachineContext';
import useEmptySliders from 'Assets/hooks/useEmptySliders';
import Instructions from 'Components/Instructions/Instructions';
import instructionsText from 'Components/Instructions/instructionsText';
import Slider from './Slider';
import TrackCover from './TrackCover';
import StyledTracks from './StyledTracks.js';

const Tracks = () => {
  const {
    musicTracks,
    isAnimated,
    spriteTrack,
    environmentTrack,
    showInstructions,
  } = useContext(MachineContext);
  const [musicSliders, setMusicSliders] = useState(useEmptySliders);

  useEffect(() => {
    if (musicTracks) {
      const audioList = musicTracks.map((track, index) => {
        const { stemName, animate, sound } = track;
        return (
          <Slider key={index} type={stemName} animate={animate} sound={sound} />
        );
      });
      setMusicSliders(audioList);
    }
  }, [musicTracks]);

  return (
    <StyledTracks className={isAnimated && 'animated'}>
      {isAnimated && <TrackCover />}
      {showInstructions && (
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
      )}
      {musicSliders}
      <Slider type='sprites' animate sound={spriteTrack} animatedMaxVol={0.5} />
      <Slider type='environment' animate={false} sound={environmentTrack} />
      <Slider type='Binaural' animate={false} />
    </StyledTracks>
  );
};

export default Tracks;
