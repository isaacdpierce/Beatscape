import React from 'react';
import PropTypes from 'prop-types';
import StyledSmallButton from './StyledSmallButton';

const SmallButton = ({ handleClick, text }) => (
  <StyledSmallButton type='button' onClick={handleClick}>
    {text}
  </StyledSmallButton>
);

SmallButton.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default SmallButton;
