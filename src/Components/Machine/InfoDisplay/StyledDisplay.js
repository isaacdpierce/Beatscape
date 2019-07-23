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
export const StyledDisplayInfoWrapper = styled.section.attrs({
  className: 'infoDisplay',
})`
  grid-column: 1 / -1;
  grid-row: 1 / span 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const StyledInfoDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  border: 1px solid rgba(12, 12, 12);
  background-color: rgba(2, 2, 2);
  width: 60rem;
  overflow: hidden;
  position: relative;

  span {
    color: var(--brand-yellow);
    padding-top: 0.3rem;
    vertical-align: middle;
    font-size: 1.2rem;
    line-height: 1.6rem;
    display: inline-block;
    font-family: 'Orbitron', sans-serif;
    text-transform: uppercase;
    letter-spacing: 3px;
    will-change: transform;

    span {
      padding: 0 7rem;
      will-change: transform;
    }
  }

  .slide {
    animation: ${slide} 5s linear forwards;
  }

  .long-slide {
    animation: ${longSlide} 8s linear forwards;
  }
`;
