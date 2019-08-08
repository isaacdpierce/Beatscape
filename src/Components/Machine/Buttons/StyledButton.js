import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--button-machine);
  width: 14rem;
  height: 4.5rem;
  text-transform: uppercase;
  font-size: 1.4rem;
  color: #999;
  padding: 0;
  border: 1px solid var(--machine-border-dark);
  transition: all 0.3s ease-in-out;
  :hover {
    cursor: pointer;
    color: white;
    background: var(--button-machine-hover);
  }
  :disabled {
    background: var(--button-machine-hover);
  }
`;

export default StyledButton;
