import styled from 'styled-components';

const StyledTracks = styled.section`
  grid-column: 2 / -2;
  justify-self: center;
  grid-row: 2 / span 1;
  background: var(--machine-color-light);
  border: 1px solid var(--machine-border-dark);
  padding: 0 0.5rem 0 2rem;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 3px;
  position: relative;

  .animated {
    pointer-events: none;
  }

  @media only screen and (max-width: 850px) {
    display: grid;
    /* grid-row-gap: 2rem; */
    padding: 3rem;
  }
`;

export default StyledTracks;
