import styled from 'styled-components';

const StyledDrawer = styled.section.attrs({
  className: 'drawer',
})`
  &,
  .drawer-col {
    display: flex;
    justify-content: space-around;
    text-align: center;
  }

  grid-column: 1 / -1;
  grid-row: 4 / span 1;
  padding: 1.5rem 0;
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
    bottom: -1rem;
    width: 105%;
    height: 1rem;
    border-left: 2px solid var(--machine-color-shadow-light);
    border-right: 2px solid var(--machine-color-shadow-light);
    border-bottom: 2px solid var(--machine-color-shadow-light);
  }

  h5,
  h6 {
    display: block;
    text-transform: uppercase;
    margin: 0;
  }

  .drawer-col {
    flex-direction: column;
  }
`;

export default StyledDrawer;
