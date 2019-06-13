import React, { useState, useEffect, useRef, useContext } from 'react';
import {
  getRandomInteger,
  getRandomFloat,
  roundCorrect,
} from 'assets/helpers/helpers';
import MachineContext from 'context/MachineContext';
import './Slider.css';

const Slider = ({
  type,
  nextLevel,
  min = 0.0,
  max = 1.0,
  step = 0.01,
  animate,
  sound,
  changeSineVolume,
  changeVolume,
}) => {
  const initialValue = type === 'binaural' ? 0.05 : (max + min) / 2;
  const { masterVolume, isAnimated, isPlaying } = useContext(MachineContext);
  const [value, setValue] = useState(initialValue);
  const [next, setNext] = useState(nextLevel);

  const levelRef = useRef();
  console.log(sound);

  useEffect(() => {
    console.log(`isPlaying in Slider useEffect is set to: ${isPlaying} `);
    console.log('Type is' + type + 'sound is ' + sound);

    isPlaying && sound.play();

    return () => sound.mute(true);
  }, [isPlaying]);

  const animateTracks = () => {
    setTimeout(() => {
      if (value > masterVolume) {
        setValue(masterVolume - 0.01);
      } else if (value > next) {
        setValue(roundCorrect(value - 0.01, 2));
      } else if (value < next) {
        setValue(roundCorrect(value + 0.01, 2));
      } else if (value === next) {
        const newNum = getRandomFloat(0, masterVolume);
        setNext(newNum);
      }
    }, getRandomInteger(1000, 10000));
    return () => clearTimeout(animateTracks);
  };

  useEffect(() => {
    if (isAnimated && animate) {
      animateTracks();
    }
  });

  const handleChange = event => {
    setValue(levelRef.current.value);
    changeVolume(value);
    type === 'Binaural' && changeSineVolume(value);
  };

  return (
    <div className='slider'>
      <label htmlFor='kicks'>
        <span className='slider__value'>{value}</span>
        <span className='slider__label'>{type}</span>
      </label>
      <input
        onChange={handleChange}
        type='range'
        ref={levelRef}
        value={value > masterVolume ? masterVolume : value}
        id={type}
        name={type}
        min={min}
        max={max}
        step={step}
      />
    </div>
  );
};

export default Slider;
