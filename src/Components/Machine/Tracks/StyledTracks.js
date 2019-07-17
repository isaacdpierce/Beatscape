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

  .animatedCover {
    padding-top: 10px;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    text-align: center;
    color: transparent;
    background-color: transparent;

    background-color: rgba(0, 0, 0, 0.392);
    z-index: 99;
  }

  .animated {
    pointer-events: none;
  }

  .animatedCover p {
    text-transform: uppercase;
    color: var(--main-brown);
    margin: 0;
    font-weight: 100;
    font-size: 0.75rem;
    text-shadow: 0px 0px 3px black;
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
