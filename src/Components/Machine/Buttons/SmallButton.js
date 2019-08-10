import React from 'react';
import PropTypes from 'prop-types';
import StyledSmallButton from './StyledSmallButton';

const SmallButton = ({ handleClick, text, className, type, ariaLabel }) => (
  <StyledSmallButton
    type={type}
    className={className}
    onClick={handleClick}
    aria-label={ariaLabel}
  >
    {text}
  </StyledSmallButton>
);

SmallButton.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  ariaLabel: PropTypes.string,
};

export default SmallButton;
