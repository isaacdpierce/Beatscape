import styled, { keyframes } from 'styled-components';

const slide = keyframes`
  from {
    transform: translateX(110%);
  }
  to {
    transform: translateX(0%);
  }
`;

const longSlide = keyframes`
  from {
    transform: translateX(80rem);
  }
  to {
    transform: translateX(-37rem);
  }
`;
export const StyledInfoDisplayWrapper = styled.section.attrs({
  className: 'infoDisplay',
})`
  grid-column: 1 / -1;
  grid-row: 1 / span 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media only screen and (max-width: 650px) {
    grid-column: 2 / -2;
  }
`;

export const StyledInfoDisplay = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(12, 12, 12);
  background-color: rgba(2, 2, 2);

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

  .slide {
    animation: ${slide} 5s linear forwards;
  }

  .long-slide {
    animation: ${longSlide} 8s linear forwards;
  }
`;
