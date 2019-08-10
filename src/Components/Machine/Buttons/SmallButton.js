import React from 'react';
import PropTypes from 'prop-types';
import StyledSmallButton from './StyledSmallButton';

const SmallButton = ({ handleClick, text, className, ariaLabel }) => (
  <StyledSmallButton
    type='button'
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
  ariaLabel: PropTypes.string,
};

export default SmallButton;
