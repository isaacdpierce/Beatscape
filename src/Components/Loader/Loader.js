import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledLoader = styled.div`
  position: absolute;
  top: 75%;
  left: 45%;

  border: 10px solid rgba(31, 96, 143, 0.084);
  border-radius: 50%;
  border-top: 10px groove var(--brand-color-1);
  border-bottom: 10px groove var(--brand-color-2);
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
  z-index: 99;
`;

const Loader = () => <StyledLoader />;

export default Loader;
