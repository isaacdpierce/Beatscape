import styled from 'styled-components';

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

  .binaural-instructions {
    position: absolute;
    bottom: 1rem;
    right: -19rem;
    width: 21rem;
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

  @media only screen and (max-width: 850px) {
    display: grid;
    padding: 5.2rem;
  }
`;

export default StyledTracks;
