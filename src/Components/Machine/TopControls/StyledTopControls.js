import styled from 'styled-components';

const StyledTopControls = styled.section.attrs({
  className: 'topControls',
})`
  grid-column: 1 / -1;
  grid-row: 2 / span 1;
  height: 100%;
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
    grid-template-columns: 6rem;
    grid-template-rows: 6rem;
    place-items: center;
    padding-top: 2rem;
  }
  .headphones::after {
    grid-column: 1 / -1;
    grid-row: 1/ -1;
    content: '?';
    font-size: 1.2rem;
    display: block;
    text-align: center;
  }

  .headphones__img {
    grid-column: 1 / -1;
    grid-row: 1/ -1;
    grid-column: 1 / -1;
    display: block;
    height: 3rem;
  }

  .headphones__img:hover {
    filter: brightness(130%);
  }

  .headphones__img:hover + .tooltip {
    opacity: 1;
  }

  .headphones__img:hover + .tooltip p {
    color: var(--main-font-color);
  }
`;

export default StyledTopControls;
