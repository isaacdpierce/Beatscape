import React from 'react';

import './Tooltip.css';

// Choose size small medium large or auto
const Tooltip = props => {
  const { children, size } = props;

  return <div className={`tooltip tooltip--${size}`}>{children}</div>;
};

export default Tooltip;
