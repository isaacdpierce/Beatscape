import styled from 'styled-components';

const StyledMachine = styled.section`
  background: var(--machine-color-dark);
  border-top: 2px solid var(--machine-color-shadow);
  border-left: 2px solid var(--machine-color-shadow);
  border-right: 2px solid var(--machine-color-shadow);
  border-radius: 6px;
  min-width: 1040px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 7.5rem minmax(auto, 22.5rem) auto;

  @media only screen and (max-width: 1100px) {
    min-width: 800px;
  }

  @media only screen and (max-width: 850px) {
    grid-template-rows: 9rem 1fr auto;

    min-width: 490px;
    min-height: 1000px;
  }
`;

export default StyledMachine;
