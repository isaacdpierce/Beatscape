import React from 'react';
import { useRef } from 'react';

import './MasterSlider.css';
// ! Get control of Howler master Howler.volume(0.5);

const MasterSlider = ({
  name,
  showValue = true,
  handleChange,
  masterVolume,
  min = 0,
  max = 1,
  step = 0.01,
  value,
}) => {
  const levelRef = useRef();

  const getLevel = () => levelRef.current.value;

  return (
    <div className='slider__master'>
      <label htmlFor='kicks'>
        {showValue && <span className='slider__value--master'>{value}</span>}

        <span className='slider__label--master'>{name}</span>
      </label>

      <input
        onChange={() => handleChange(getLevel())}
        type='range'
        ref={levelRef}
        value={value}
        name={name}
        min={min}
        max={max}
        step={step}
      />
    </div>
  );
};

export default MasterSlider;
