import React, { useContext, useState, useEffect } from 'react';
import MachineContext from 'Context/MachineContext';
import { Howl } from 'howler';
import Oscillator from 'Components/Oscillator/Oscillator';
import trackTypes from 'Assets/audio/trackTypes';
import Loader from 'Components/Loader/Loader';
import Slider from './Slider';

import StyledTracks from './StyledTracks.js';

const Tracks = () => {
  const { data, isPlaying, isAnimated, isLoading } = useContext(MachineContext);
  const [sineFrequency, setSineFrequency] = useState(0);
  const [sineVolume, setSineVolume] = useState(0.05);
  const [tracks, setTracks] = useState(undefined);

  useEffect(() => {
    if (data) {
      const { stems } = data;
      const trackList = stems.map((stem, index) => {
        const { stemName, animate, sources } = stem;
        console.log(Howl);

        return {
          id: index + 1,
          stemName,
          animate,
          sound: new Howl({
            src: sources[0],
            autoplay: false,
            loop: true,
            volume: 0.5,
          }),
        };
      });
      setTracks(trackList);
    }
  }, [data]);

  const changeSineVolume = value => {
    setSineVolume(value);
  };

  const changeSineFrequency = value => {
    setSineFrequency(value);
  };

  return (
    <StyledTracks className={isAnimated && 'animated'}>
      {/* <Loader /> */}
      {isAnimated && (
        <section className='animatedCover animate'>
          <p>Tracks Animated - Click stop animate to change levels</p>
        </section>
      )}
      {tracks
        ? tracks.map((track, i) => {
            const { stemName, animate, sound } = track;

            return (
              <Slider key={i} type={stemName} animate={animate} sound={sound} />
            );
          })
        : trackTypes.map((track, index) => (
            <Slider
              key={index}
              type={track}
              changeSineVolume={changeSineVolume}
              changeSineFrequency={changeSineFrequency}
            />
          ))}
      <Slider
        type='Binaural'
        animate={false}
        changeSineVolume={changeSineVolume}
        changeSineFrequency={changeSineFrequency}
        sound={Oscillator}
      />
      {isPlaying && (
        <Oscillator frequency={sineFrequency} type='sine' volume={sineVolume} />
      )}
    </StyledTracks>
  );
};

export default Tracks;
