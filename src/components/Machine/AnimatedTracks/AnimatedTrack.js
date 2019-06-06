import React, { useState, useEffect, useRef } from 'react';
import { getRandomInteger } from '../../../assets/helpers/helpers';

import '../Tracks/Track.css';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const AnimatedTrack = ({ type, level, nextLevel }) => {
  const [value, setValue] = useState(level);
  const [next, setNext] = useState(nextLevel);

  useInterval(() => {
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
  }, 1000);

  const handleChange = event => {
    console.log(event.target.value);
    setValue(event.target.value);
  };

  return (
    <div className='slider'>
      <label htmlFor='kicks'>
        <span className='slider__label'>{type}</span>
      </label>
      <input
        onChange={handleChange}
        type='range'
        value={value}
        id='start'
        name={type}
        min='0'
        max='100'
        step='1'
      />
    </div>
  );
};

export default AnimatedTrack;
