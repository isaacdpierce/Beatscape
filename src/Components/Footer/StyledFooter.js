import styled from 'styled-components';

const StyledFooter = styled.footer`
  grid-column: 1 / -1;
  grid-row: 3 / span 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 47.5px;

  .nav__links {
    padding: 0;
    letter-spacing: 1px;
    display: flex;
    min-width: 20vw;
    display: flex;
    justify-content: space-between;
    margin: 0;
    font-weight: 100;
    text-transform: uppercase;
    text-shadow: 0 0 6px var(black);
    align-self: flex-end;
  }

  nav {
    display: flex;
    height: 100%;
    padding-bottom: 0.1rem;
  }

  .nav__links a {
    font-size: 16px;
  }

  .nav__links li:not(:last-child) {
    padding-right: 23.8px;
  }

  .selected {
    color: var(--yellow-link-color-active);
  }

  .copyright {
    display: flex;
    justify-content: space-between;
    padding: 0 47.5px;
    width: 100%;
  }

  .copyright p {
    margin: 0;
    color: rgb(76, 96, 114);
    font-size: 16px;
  }
`;

export default StyledFooter;
