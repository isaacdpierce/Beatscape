import React, { useEffect, useRef, useState } from 'react';

const Input = ({ type, changeValue }) => {
  const min = 0;
  const max = 1.0;
  const step = 0.01;
  const [value, setValue] = useState(undefined);
  const levelRef = useRef();

  console.log(value);

  useEffect(() => {
    if (levelRef) {
      setValue(parseFloat(levelRef.current.value));
    }
  }, [levelRef]);

  return (
    <label htmlFor={type}>
      <span className='slider__value'>{value}</span>
      <span className='slider__label'>{type}</span>
      <input
        aria-label={`Controls volume of ${type} track`}
        onChange={() => changeValue(value)}
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
