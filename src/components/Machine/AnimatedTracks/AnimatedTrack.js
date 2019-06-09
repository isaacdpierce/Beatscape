import React, { useState, useEffect, useRef, useContext } from 'react';
import { getRandomInteger } from '../../../assets/helpers/helpers';
import MachineContext from '../../../context/MachineContext';

import '../Tracks/Slider.css';

const AnimatedTrack = ({ type, nextLevel }) => {
  const { masterVolume } = useContext(MachineContext);
  const [isAnimated, setIsAnimated] = useState(false);

  const [value, setValue] = useState(500);
  const [next, setNext] = useState(nextLevel);

  console.log(`MasterVolume in ATrack is ${masterVolume}`);

  const levelRef = useRef();

  const timer = () => {
    setTimeout(() => {
      if (value > masterVolume) {
        setValue(masterVolume - 1);
      } else if (value > next) {
        setValue(value - 1);
      } else if (value < next) {
        setValue(value + 1);
      } else if (value === next) {
        const newNum = getRandomInteger(0, masterVolume);
        setNext(newNum);
      }
    }, getRandomInteger(100, 1000));
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    isAnimated && timer();
  });

  const handleChange = event => {
    setValue(levelRef.current.value);
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
        value={value}
        id={type}
        name={type}
        min='0'
        max='1000'
        step={getRandomInteger(1, 5)}
      />
    </div>
  );
};

export default AnimatedTrack;
