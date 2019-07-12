import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MachineContext from 'Context/MachineContext';
import styled from 'styled-components';

const StyledButton = styled.div`
  padding: 0.5rem;
  display: block;
  border: none;
  text-transform: uppercase;
  background: inherit;
  font-size: 0.8rem;
  color: var(--yellow-font-color-dark);
  :focus,
  :hover {
    outline: none;
    color: var(--yellow-font-color-light);
  }
`;

const DrawerButton = ({ children, source }) => {
  const { setUrl } = useContext(MachineContext);

  return (
    <StyledButton type='submit' onClick={() => setUrl(source)}>
      {children}
    </StyledButton>
  );
};

DrawerButton.propTypes = {
  children: PropTypes.string.isRequired,
  source: PropTypes.string,
};

export default DrawerButton;
