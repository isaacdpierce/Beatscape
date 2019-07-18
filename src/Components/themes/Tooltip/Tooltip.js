import React from 'react';
import PropTypes from 'prop-types';
import StyledTooltip from './StyledTooltip.js';

// Choose size small medium large or auto
const Tooltip = ({ children }) => (
  <StyledTooltip className='tooltip'>{children}</StyledTooltip>
);
Tooltip.propTypes = {
  children: PropTypes.object.isRequired,
};
export default Tooltip;
