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
  grid-template-rows: 9rem minmax(auto, 23rem) auto;

  @media only screen and (max-width: 1100px) {
    .machine {
      min-width: 800px;
    }
  }
  @media only screen and (max-width: 850px) {
    .machine {
      min-width: 490px;
      min-height: 1000px;
      margin-bottom: 5rem;
    }
  }
`;

export default StyledMachine;
