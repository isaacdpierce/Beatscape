import React, { useContext, useState, useEffect } from 'react';
import MachineContext from 'Context/MachineContext';
import SetMachineContext from 'Context/SetMachineContext';
import useEmptySliders from 'Assets/hooks/useEmptySliders';
import MachineInstructions from 'Components/Instructions/MachineInstructions';
import SmallButton from 'Components/Machine/Buttons/SmallButton';
import Slider from './Slider';
import TrackCover from './TrackCover';
import StyledTracks from './StyledTracks.js';

const Tracks = () => {
  const { musicTracks, isAnimated, spriteTrack, environmentTrack } = useContext(
    MachineContext
  );
  const setState = useContext(SetMachineContext);
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
    // eslint-disable-next-line
  }, [musicTracks]);

  const handleReset = () => {
    setState({ resetValues: true });
  };

  return (
    <StyledTracks className={isAnimated && 'animated'}>
      {isAnimated && <TrackCover />}
      <SmallButton
        text={isAnimated ? '' : 'Reset Levels'}
        className='button__reset'
        handleClick={handleReset}
        aria-label='Resets all levels'
      />
      <MachineInstructions />
      {musicSliders}
      <Slider type='sprites' animate sound={spriteTrack} animatedMaxVol={0.5} />
      <Slider type='environment' animate={false} sound={environmentTrack} />
      <Slider type='Binaural' animate={false} />
    </StyledTracks>
  );
};

export default Tracks;
