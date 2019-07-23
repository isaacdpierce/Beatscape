import React, { useEffect, useRef, useState } from 'react';

const Input = ({ type, value, handleSliderChange, min, max, step }) => {
  const [val, setVal] = useState(undefined);
  const levelRef = useRef();

  useEffect(() => {
    if (levelRef) {
      setVal(levelRef.current.value);
    }
  }, [levelRef]);

  return (
    <label htmlFor={type}>
      <span className='slider__value'>{value}</span>
      <span className='slider__label'>{type}</span>
      <input
        aria-label={`Controls volume of ${type} track`}
        onChange={handleSliderChange(val)}
        type='range'
        ref={levelRef}
        value={value}
        id={type}
        name={type}
        min={min}
        max={max}
        step={step}
      />
    </label>
  );
};

export default Input;
