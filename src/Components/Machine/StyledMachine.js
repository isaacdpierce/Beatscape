import styled from 'styled-components';

const StyledMachine = styled.section.attrs({
  className: 'machine',
})`
  background: var(--machine-color-dark);
  border-top: 2px solid var(--machine-color-shadow);
  border-left: 2px solid var(--machine-color-shadow);
  border-right: 2px solid var(--machine-color-shadow);
  border-radius: 6px;
  min-width: 100rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 9rem 15rem minmax(auto, 56rem) 18rem;

  @media only screen and (max-width: 1100px) {
    min-width: 80rem;
  }

  @media only screen and (max-width: 850px) {
    grid-template-rows: 9rem 12rem 1fr 12rem;
    min-width: 35rem;
    min-height: 100rem;
  }
`;

export default StyledMachine;
