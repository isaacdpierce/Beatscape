import React from 'react';
import { useState } from 'react';

import './Slider.css';
//! To alter the classname add a prop with an element name
//! set showValue to false to not show value
const Slider = ({ type, modifier, showValue = true }) => {
  const [level, setLevel] = useState(50);

  const handleChange = event => {
    console.log(event.target.value);
    setLevel(event.target.value);
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
        value={level}
        id='start'
        name={type}
        min='0'
        max='100'
        step='.01'
      />
    </div>
  );
};

export default Slider;
