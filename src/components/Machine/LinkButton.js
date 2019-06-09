import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ControlsButton = styled(Link)`
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

const LinkButton = ({ to, text, handleClick }) => {
  return (
    <>
      <ControlsButton to={to} onClick={handleClick} value={Text}>
        {text}
      </ControlsButton>
    </>
  );
};

export default LinkButton;
