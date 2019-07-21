import styled from 'styled-components';

const StyledTracks = styled.section`
  grid-column: 2 / -2;
  justify-self: center;
  min-height: 520px;
  grid-row: 2 / span 1;
  background: var(--machine-color-light);
  border: 1px solid var(--machine-border-dark);
  padding: 0 11px 0 47px;
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
    padding: 52px;
  }
`;

export default StyledTracks;
