import styled from 'styled-components';

const StyledHeader = styled.header`
  &,
  nav {
    display: flex;
  }

  justify-content: space-between;
  grid-column: 1 / -1;
  grid-row: 1 / span 1;
  padding: 0 4.7rem;
  align-items: flex-end;

  .logo,
  .nav__links {
    margin: 0;
    text-transform: uppercase;
    text-shadow: 0 0 6px var(black);
    align-self: flex-end;
  }

  .logo:hover {
    color: white;
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
    font-size: calc(0.9rem + (26 - 16) * ((100vw - 300px) / (1600 - 300)));
  }

  .nav__links li:not(:last-child) {
    padding-right: 2.9rem;
  }

  .selected {
    color: var(--yellow-link-color-active);
  }
  @media only screen and (max-width: 650px) {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    .nav__links a {
      font-size: 1.3rem;
    }
  }
`;

export default StyledHeader;
