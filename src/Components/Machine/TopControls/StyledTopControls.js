import styled from 'styled-components';

const StyledTopControls = styled.section.attrs({
  className: 'topControls',
})`
  grid-column: 1 / -1;
  grid-row: 1 / span 1;
  height: 100%;
  flex-direction: column;
  align-items: center;

  &,
  .buttons-container {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .buttons-container {
    height: 4.7rem;
  }

  .headphones {
    margin: 0;
    display: grid;
    place-items: center;
    padding-top: 4.7rem;
  }
  .headphones::after {
    content: '?';
    font-size: 1.2rem;
    display: block;
    text-align: center;
    transform: translateY(-2rem);
  }

  .headphones__img {
    display: block;
    height: 3rem;
  }

  .headphones:hover {
    filter: brightness(130%);
  }

  .headphones:hover + .tooltip {
    opacity: 1;
  }

  .headphones:hover + .tooltip p {
    color: white;
  }
`;

export default StyledTopControls;
