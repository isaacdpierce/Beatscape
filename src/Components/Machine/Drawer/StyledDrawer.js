import styled from 'styled-components';

const StyledDrawer = styled.section`
  &,
  .drawer-col {
    display: flex;
    justify-content: space-around;
  }

  grid-column: 1 / -1;
  grid-row: 3 / span 1;
  padding: 0.6rem 0;

  background-color: black;
  width: 95%;

  border-left: 6px solid var(--machine-border-dark);
  border-right: 6px solid var(--machine-border-dark);
  box-shadow: 0 0px 3px 0 var(--machine-color-shadow);
  position: relative;
  left: 2.5%;
  transition: all 0.6s ease-in-out;
  z-index: -1;

  ::after {
    content: '';
    background: var(--machine-border-dark);
    border-radius: 3px;
    display: block;
    position: absolute;
    bottom: -10px;
    width: 105%;
    height: 10px;
    border-left: 2px solid var(--machine-color-shadow-light);
    border-right: 2px solid var(--machine-color-shadow-light);
    border-bottom: 2px solid var(--machine-color-shadow-light);
  }

  .drawer-col {
    flex-direction: column;
  }
`;

export default StyledDrawer;
