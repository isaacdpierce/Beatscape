import React from 'react';
import { useRef } from 'react';

import './MasterSlider.css';

const MasterSlider = ({
  type,
  showValue = true,
  handleChange,
  masterVolume,
  value,
}) => {
  const levelRef = useRef();

  const getLevel = () => levelRef.current.value;

  return (
    <div className='slider__master'>
      <label htmlFor='kicks'>
        {showValue && <span className='slider__value--master'>{value}</span>}

        <span className='slider__label--master'>{type}</span>
      </label>

      <input
        onChange={() => handleChange(getLevel())}
        type='range'
        ref={levelRef}
        value={value}
        id='start'
        name={type}
        min='0'
        max='1000'
        step='1'
      />
    </div>
  );
};

export default MasterSlider;
