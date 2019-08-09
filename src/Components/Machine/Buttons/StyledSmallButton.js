import styled from 'styled-components';

const StyledSmallButton = styled.button`
  background: var(--button-machine);
  text-transform: uppercase;
  font-size: 1.2rem;
  color: #999;
  padding: 0.5rem 1rem;
  border: 1px solid var(--machine-border-dark);
  transition: all 0.3s ease-in-out;
  margin-bottom: 1.5rem;
  :hover {
    cursor: pointer;
    color: white;
    background: var(--button-machine-hover);
  }
`;

export default StyledSmallButton;
