import React from 'react';
import PropTypes from 'prop-types';
import StyledInstructions from './StyledInstructions';

const Instructions = ({ text, className }) => (
  <StyledInstructions className={className}>
    <p>{text}</p>
  </StyledInstructions>
);

Instructions.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};
export default Instructions;
