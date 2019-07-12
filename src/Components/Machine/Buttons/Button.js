import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ControlsButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--button-machine);
  width: 6rem;
  height: 2rem;
  text-transform: uppercase;
  font-size: 0.6rem;
  padding: 0;
  border: 1px solid var(--machine-border-dark);
  transition: background 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    color: white;
    background: var(--button-machine-hover);
  }
`;

const Button = ({ text, handleClick }) => {
  return (
    <>
      <ControlsButton onClick={handleClick}>{text}</ControlsButton>
    </>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
