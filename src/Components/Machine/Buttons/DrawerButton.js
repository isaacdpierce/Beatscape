import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MachineContext from 'Context/MachineContext';
import styled from 'styled-components';

const StyledDrawerButton = styled.button`
  padding: 0.5rem;
  display: block;
  border: none;
  text-transform: uppercase;
  background: inherit;
  font-size: 2rem;
  color: var(--brand-yellow-dark);
  :focus,
  :hover {
    outline: none;
    color: var(--brand-yellow-light);
  }
`;

const DrawerButton = ({ children, source }) => {
  const { setUrl } = useContext(MachineContext);

  return (
    <StyledDrawerButton type='submit' onClick={() => setUrl(source)}>
      {children}
    </StyledDrawerButton>
  );
};

DrawerButton.propTypes = {
  children: PropTypes.string.isRequired,
  source: PropTypes.string,
};

export default DrawerButton;
