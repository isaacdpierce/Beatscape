import React from 'react';
import { useRef } from 'react';

import './MasterSlider.css';

const MasterSlider = ({
  type,
  modifier,
  showValue = true,
  handleChange,
  masterVolume,
}) => {
  const levelRef = useRef();

  // useEffect(() => {
  //   isAnimated && animateTracks();
  // });
  const getLevel = () => levelRef.current.value;

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
        onChange={() => handleChange(getLevel)}
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
