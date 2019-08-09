import styled from 'styled-components';

const AppTheme = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: minmax(6rem, 6vw) 1fr 38vw;
  grid-gap: 0.5rem;
  background: radial-gradient(
    circle,
    var(--main-bg-color-light) 0%,
    var(--main-bg-color-dark) 75%
  );
  z-index: -10;
  overflow: hidden;

  main {
    grid-column: 1 / -1;
    grid-row: 2 / -2;
    padding: 4.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1; /* allows drawer to sit at -1 */
  }
  @media only screen and (max-width: 650px) {
    grid-template-rows: minmax(12rem, 6vw) 1fr 100vw;
    main {
      padding: 2rem 0;
    }
  }
`;

export default AppTheme;
