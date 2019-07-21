import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './StyledButton';

const Button = ({ text, handleClick }) => (
  <StyledButton onClick={handleClick}>{text}</StyledButton>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
