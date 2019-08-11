import styled, { keyframes } from 'styled-components';

export const StyledInfoDisplayWrapper = styled.section.attrs({
  className: 'info-display__wrapper',
})`
  grid-column: 1 / -1;
  grid-row: 1 / span 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;

  button {
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
  }

  @media only screen and (max-width: 650px) {
    grid-column: 2 / -2;
  }
`;

export const StyledInfoDisplay = styled.div.attrs({
  className: 'info-display',
})`
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(12, 12, 12);
  background-color: rgba(2, 2, 2);
  box-shadow: inset 0 0 1px 2px black;
  position: relative;
  overflow: hidden;

  span {
    color: var(--brand-yellow);
    padding-top: 2px;
    vertical-align: middle;
    font-size: 1.2rem;
    line-height: 1.6rem;
    display: inline-block;
    font-family: 'Orbitron', sans-serif;
    text-transform: uppercase;
    letter-spacing: 3px;
  }

  @media only screen and (max-width: 850px) {
    min-height: 4rem;
    span {
      padding: 0.5rem;
    }
  }
`;
