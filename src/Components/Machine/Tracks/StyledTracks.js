import styled from 'styled-components';

const StyledTracks = styled.section`
  grid-column: 2 / -2;
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
    height: 780px;
    width: 600px;
    flex-direction: column;
  }

  @media only screen and (max-width: 380px) {
    .slider input {
      width: 370px;
    }
  }
`;

export default StyledTracks;
