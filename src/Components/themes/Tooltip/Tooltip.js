import React from 'react';
import PropTypes from 'prop-types';

import './Tooltip.css';

// Choose size small medium large or auto
const Tooltip = ({ children, size }) => (
  <div className={`tooltip tooltip--${size}`}>{children}</div>
);

Tooltip.propTypes = {
  children: PropTypes.object.isRequired,
  size: PropTypes.string.isRequired,
};
export default Tooltip;
