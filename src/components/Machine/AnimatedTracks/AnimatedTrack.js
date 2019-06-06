import React, { useState, useEffect } from 'react';
import { getRandomInteger } from '../../../assets/helpers/helpers';

import '../Tracks/Slider.css';

const AnimatedTrack = ({ type, nextLevel }) => {
  const [value, setValue] = useState(50);
  const [next, setNext] = useState(nextLevel);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (value > next) {
        console.log(`${value} is greater than ${next}`);
        setValue(value - 1);
      } else if (value < next) {
        console.log(`${value} is less than ${next}`);

        setValue(value + 1);
      } else if (value === next) {
        const newNum = getRandomInteger(0, 80);
        console.log(`Your new Number is: ${newNum}`);
        setNext(newNum);
      }
    }, getRandomInteger(1000, 10000));
    return () => clearTimeout(timer);
  });

  const handleChange = event => {
    console.log(event.target.value);
    setValue(event.target.value);
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
        value={value}
        id={type}
        name={type}
        min='0'
        max='100'
        step={getRandomInteger(1, 5)}
      />
    </div>
  );
};

export default AnimatedTrack;
