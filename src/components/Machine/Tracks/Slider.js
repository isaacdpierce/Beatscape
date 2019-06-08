import React from 'react';
import { useState, useRef } from 'react';

import './Slider.css';

const Slider = ({ type, modifier, showValue = true, changeMasterVolume }) => {
  const [level, setLevel] = useState(500);

  const levelRef = useRef();

  const handleChange = event => {
    setLevel(levelRef.current.value);
  };

  return (
    <div className={modifier ? `slider__${modifier}` : 'slider'}>
      <label htmlFor='kicks'>
        {showValue && (
          <span
            className={
              modifier ? `slider__value--${modifier}` : 'slider__value'
            }
          >
            {level}
          </span>
        )}

        <span
          className={modifier ? `slider__label--${modifier}` : 'slider__label'}
        >
          {type}
        </span>
      </label>

      <input
        onChange={handleChange}
        type='range'
        ref={levelRef}
        value={level}
        id='start'
        name={type}
        min='0'
        max='1000'
        step='1'
      />
    </div>
  );
};

export default Slider;
