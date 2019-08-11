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
const swing = keyframes`
  0% {
    transform: translateX(115%);
     background-color: var(--loader-dark);
  }
  20% {
    background-color: var(--loader-dark);
  }
  50% {
    background-color: var(--loader-light);
  }
  80% {
    background-color: var(--loader-dark);
  }
  100% {
  transform: translateX(-200%);
  background-color: var(--loader-dark);
  }
`;

const StyledSwingLoader = styled.div.attrs({
  className: 'loader',
})`
  width: 50%;
  height: 100%;
  position: absolute;
  animation: ${swing} 2s alternate ease-in-out infinite 2s;
`;

const StyledSpinLoader = styled.div`
  position: absolute;
  top: 5rem;
  left: 43%;

  border: 10px solid rgba(31, 96, 143, 0.084);
  border-radius: 50%;
  border-top: 10px groove var(--main-bg-color-light);
  border-bottom: 10px groove var(--main-bg-color-light);
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
  z-index: 99;
`;

export const SwingLoader = () => <StyledSwingLoader />;
export const SpinLoader = () => <StyledSpinLoader />;
