import styled from 'styled-components';

const StyledTopControls = styled.section`
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
    height: 2rem;
  }

  .headphones {
    margin: 0;
    /* padding-top: 1rem; */
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
  }
  .headphones::after {
    content: '?';
    font-size: 12px;
    display: block;
    text-align: center;
    transform: translateY(-30px);
  }

  .headphones__img {
    display: block;
    height: 30px;
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
