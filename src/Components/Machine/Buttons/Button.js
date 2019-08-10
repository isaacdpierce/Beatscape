import React, { useContext } from 'react';
import MachineContext from 'Context/MachineContext';
import PropTypes from 'prop-types';
import StyledButton from './StyledButton';

const Button = ({ handleClick, text, className, type, ariaLabel }) => {
  const { isLoading } = useContext(MachineContext);

  return (
    <StyledButton
      onClick={handleClick}
      disabled={isLoading}
      className={className}
      type={type}
      aria-label={ariaLabel}
    >
      {text}
    </StyledButton>
  );
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  ariaLabel: PropTypes.string,
};

export default Button;
