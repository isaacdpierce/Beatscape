import React, { useContext, useState, useEffect } from 'react';

import { Howl, Howler } from 'howler';
import Slider from './Slider';
import './Tracks.css';
import MachineContext from 'context/MachineContext';
import { getRandomFloat } from 'assets/helpers/helpers';
import Oscillator from 'components/Oscillator/Oscillator';

import kick from 'assets/audio/dusty-road/kick.mp3';
import bass from 'assets/audio/dusty-road/bass.mp3';
import atmospheric from 'assets/audio/dusty-road/atmospheric.mp3';
import chords from 'assets/audio/dusty-road/chords.mp3';
import cymbals from 'assets/audio/dusty-road/cymbals.mp3';
import harmony from 'assets/audio/dusty-road/harmony.mp3';
import hats from 'assets/audio/dusty-road/hats.mp3';
import instrument from 'assets/audio/dusty-road/instrument.mp3';
import melody from 'assets/audio/dusty-road/melody.mp3';
import piano from 'assets/audio/dusty-road/piano.mp3';
import snare from 'assets/audio/dusty-road/snare.mp3';
import sprites from 'assets/audio/dusty-road/sprites.mp3';

const Tracks = () => {
  const { STORE, masterVolume, isPlaying } = useContext(MachineContext);
  const [frequency, setFrequency] = useState(60);
  const [sineVolume, setSineVolume] = useState(0.1);
  const [volume, setVolume] = useState(0.5);
  const { tracks } = STORE;

  const playTracks = () => {
    console.log('Tracks Playing!');
    const track_1 = new Howl({
      src: [kick],
      autoplay: true,
      loop: true,
      volume: volume,
    });
    const track_2 = new Howl({
      src: [bass],
      autoplay: true,
      loop: true,
      volume: 1,
    });
    const track_3 = new Howl({
      src: [atmospheric],
      autoplay: true,
      loop: true,
      volume: 0.5,
    });
    const track_4 = new Howl({
      src: [chords],
      autoplay: true,
      loop: true,
      volume: 0.5,
    });
    const track_5 = new Howl({
      src: [cymbals],
      autoplay: true,
      loop: true,
      volume: 0.5,
    });
    const track_6 = new Howl({
      src: [harmony],
      autoplay: true,
      loop: true,
      volume: 0.5,
    });
    const track_7 = new Howl({
      src: [hats],
      autoplay: true,
      loop: true,
      volume: 0.5,
    });
    const track_8 = new Howl({
      src: [instrument],
      autoplay: true,
      loop: true,
      volume: 0.5,
    });
    const track_9 = new Howl({
      src: [sprites],
      autoplay: true,
      loop: true,
      volume: 0.5,
    });
    const track_10 = new Howl({
      src: [melody],
      autoplay: true,
      loop: true,
      volume: 0.5,
    });
    const track_11 = new Howl({
      src: [snare],
      autoplay: true,
      loop: true,
      volume: 0.5,
    });
    const track_12 = new Howl({
      src: [piano],
      autoplay: true,
      loop: true,
      volume: 0.5,
    });
  };

  useEffect(() => {
    isPlaying && playTracks();
  }, [isPlaying]);

  // TODO Move this to new component for adjusting frequency
  // const changeFrequency = value => {
  //   setFrequency(value);
  // };

  const changeSineVolume = value => {
    setSineVolume(value);
  };

  const changeVolume = value => {
    setVolume(value);
  };

  return (
    <section className='tracks'>
      {tracks.map((track, i) => {
        const { type, min, max, step, animate, url } = track;
        return (
          <Slider
            key={i}
            min={min}
            max={max}
            step={step}
            type={type}
            animate={animate}
            nextLevel={getRandomFloat(0, masterVolume)}
            changeSineVolume={changeSineVolume}
            changeVolume={changeVolume}
            src={url}
          />
        );
      })}
      {isPlaying && (
        <Oscillator frequency={frequency} type={'sine'} volume={sineVolume} />
      )}
    </section>
  );
};

export default Tracks;
