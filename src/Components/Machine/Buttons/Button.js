import React, { useContext } from 'react';
import MachineContext from 'Context/MachineContext';
import PropTypes from 'prop-types';
import StyledButton from './StyledButton';

const Button = ({ text, handleClick }) => {
  const { isLoading } = useContext(MachineContext);

  return (
    <StyledButton onClick={handleClick} disabled={isLoading}>
      {text}
    </StyledButton>
  );
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
