import React from 'react';
import { useRef } from 'react';

import './MasterSlider.css';

const MasterSlider = ({
  type,
  modifier,
  showValue = true,
  changeMasterVolume,
  masterVolume,
}) => {
  const levelRef = useRef();
  const getlevel = () => levelRef.current.value;

  return (
    <div className={modifier ? `slider__${modifier}` : 'slider'}>
      <label htmlFor='kicks'>
        {showValue && (
          <span
            className={
              modifier ? `slider__value--${modifier}` : 'slider__value'
            }
          >
            {masterVolume}
          </span>
        )}

        <span
          className={modifier ? `slider__label--${modifier}` : 'slider__label'}
        >
          {type}
        </span>
      </label>

      <input
        onChange={() => changeMasterVolume(getlevel())}
        type='range'
        ref={levelRef}
        value={masterVolume}
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
