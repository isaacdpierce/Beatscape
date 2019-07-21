import styled from 'styled-components';

const StyledFooter = styled.footer`
  grid-column: 1 / -1;
  grid-row: 3 / span 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 4.8rem;

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
    text-shadow: 0 0 3px black;
    align-self: flex-end;
  }

  nav {
    display: flex;
    height: 100%;
    padding-bottom: 0.1rem;
  }
  .nav__links a {
    font-size: calc(0.9rem + (26 - 16) * ((100vw - 300px) / (1600 - 300)));
  }

  .nav__links li:not(:last-child) {
    padding-right: 2.4rem;
  }

  .selected {
    color: var(--yellow-link-color-active);
  }

  .copyright {
    display: flex;
    justify-content: space-between;
    padding: 0 4.7rem;
    width: 100%;
  }

  .copyright p {
    margin: 0;
    color: rgb(76, 96, 114);
    font-size: 1.6rem;
  }

  @media only screen and (max-width: 650px) {
    .nav__links a {
      font-size: 1.3rem;
    }
  }
`;

export default StyledFooter;
