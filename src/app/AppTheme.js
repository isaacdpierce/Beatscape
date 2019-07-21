import styled from 'styled-components';

const AppTheme = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: minmax(60px, 6vw) 1fr 18vw;
  grid-gap: 0.5rem;
  background: radial-gradient(
    circle,
    var(--main-bg-color-light) 0%,
    var(--main-bg-color-dark) 75%
  );
  z-index: -10;

  main {
    grid-column: 1 / -1;
    grid-row: 2 / -2;
    padding: 47.5px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1; /* allows drawer to sit at -1 */
  }
`;

export default AppTheme;
