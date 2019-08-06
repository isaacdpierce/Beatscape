import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, changeValue, value }) => {
  const levelRef = useRef();

  const handleChange = useCallback(() => {
    changeValue(parseFloat(levelRef.current.value));
  }, [changeValue, levelRef]);

  return (
    <label htmlFor={type}>
      <span className='slider__value'>{value}</span>
      <span className='slider__label'>{type}</span>
      <input
        aria-label={`Controls volume of ${type} track`}
        onChange={handleChange}
        type='range'
        ref={levelRef}
        value={value}
        id={type}
        name={type}
        min={0}
        max={1}
        step={0.01}
      />
    </label>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  changeValue: PropTypes.func.isRequired,
};

export default Input;
