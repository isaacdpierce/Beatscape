import React from 'react';

import './Button.css';

const Button = ({ text, type, handleClick }) => {
  return (
    <div>
      <button className={`button-${type}`} onClick={handleClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
