import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  grid-column: 1 / -1;
  grid-row: 1 / span 1;
  padding: 0 2rem;
  align-items: flex-end;

  .logo,
  .nav__links {
    margin: 0;
    font-weight: 100;
    text-transform: uppercase;
    text-shadow: 0 0 6px var(black);
    align-self: flex-end;
  }

  .logo:hover {
    color: white;
  }

  & > nav {
    display: flex;
    height: 100%;
    padding-bottom: 0.1rem;
  }

  .nav__links {
    padding: 0;
    letter-spacing: 1px;
    display: flex;
    min-width: 20vw;
    display: flex;
    justify-content: space-between;
  }

  .nav__links a {
    font-size: 16px;
  }

  .nav__links li:not(:last-child) {
    padding-right: 1rem;
  }

  .selected {
    color: var(--yellow-link-color-active);
  }
`;

export default StyledHeader;
