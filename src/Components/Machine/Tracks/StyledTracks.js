import styled, { keyframes } from 'styled-components';

const moveRight = keyframes`
  from {
    transform: translateX(-300%);
  }
  to {
    transform: translateX(0);
  }
`;
const moveLeft = keyframes`
  from {
    transform: translateX(300%);
  }
  to {
    transform: translateX(0);
  }
`;

const StyledTracks = styled.section.attrs({
  className: 'tracks',
})`
  grid-column: 2 / -2;
  justify-self: center;
  min-height: 52rem;
  grid-row: 3 / span 1;
  background: var(--machine-color-light);
  border: 1px solid var(--machine-border-dark);
  padding: 0 1.1rem 0 4.7rem;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 3px;
  position: relative;

  .animated {
    pointer-events: none;
  }

  .volume-instructions {
    position: absolute;
    top: 5%;
    left: 30%;
    width: 30rem;
  }

  .stereo-instructions {
    position: absolute;
    bottom: -5rem;
    left: 6rem;
    width: 60rem;
  }

  .soundscapes-instructions {
    position: absolute;
    bottom: -25rem;
    left: 27rem;
    width: 25rem;
  }

  .animate-instructions {
    position: absolute;
    top: -15rem;
    right: -19rem;
    width: 21rem;
  }

  .binaural-instructions {
    position: absolute;
    bottom: 1rem;
    right: -19rem;
    width: 21rem;
  }

  /* Right transitions */
  .soundscapes-instructions,
  .stereo-instructions,
  .volume-instructions {
    transform: translateX(-80vw);
    transition: transform 1.2s ease-in-out;
  }

  .is_showing {
    transform: translateX(0%) !important;
    transition: transform 1s ease-in-out;
  }

  /* Left transitions */
  .animate-instructions,
  .binaural-instructions {
    transform: translateX(50vw);
    transition: transform 1.5s ease-in-out;
  }

  @media only screen and (max-width: 850px) {
    display: grid;
    padding: 5.2rem;
  }
`;

export default StyledTracks;
