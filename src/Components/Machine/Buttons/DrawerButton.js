import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import SetMachineContext from 'Context/SetMachineContext';
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

const DrawerButton = ({
  children,
  category,
  source,
  fetchType,
  spriteUrl,
  environmentUrl,
}) => {
  const setState = useContext(SetMachineContext);

  const handleClick = () => {
    if (fetchType === 'music') {
      setState({ musicUrl: source });
    }
    if (fetchType === 'scene') {
      console.log('clicked');

      setState({ spriteUrl, environmentUrl, sceneType: category });
    }
  };

  return (
    <StyledDrawerButton type='submit' onClick={handleClick}>
      {children}
    </StyledDrawerButton>
  );
};

DrawerButton.propTypes = {
  children: PropTypes.string.isRequired,
  source: PropTypes.string,
  fetchType: PropTypes.string.isRequired,
  spriteUrl: PropTypes.string,
  environmentUrl: PropTypes.string,
  category: PropTypes.string,
};

export default DrawerButton;
