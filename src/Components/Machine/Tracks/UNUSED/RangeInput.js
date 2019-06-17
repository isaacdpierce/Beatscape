import React from 'react';

const RangeInput = ({
  type,
  handleChange,
  ref,
  value,
  id,
  name,
  min,
  max,
  step,
  masterVolume,
}) => {
  return (
    <div className='slider'>
      <label htmlFor='kicks'>
        <span className='slider__value'>{value}</span>
        <span className='slider__label'>{type}</span>
      </label>
      <input
        onChange={handleChange}
        type='range'
        ref={ref}
        value={value}
        id={type}
        name={type}
        min={min}
        max={max}
        step={step}
      />
    </div>
  );
};

export default RangeInput;
