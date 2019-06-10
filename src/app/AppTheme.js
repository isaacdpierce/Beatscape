import styled from 'styled-components';

const AppTheme = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: 3rem 1fr 25vw;
  grid-gap: 0.5rem;
  background: radial-gradient(
    circle,
    var(--main-bg-color-light) 0%,
    var(--main-bg-color-dark) ${props => props.backgroundLevel}%
  );
  z-index: -10;

  main {
    grid-column: 1 / -1;
    grid-row: 2 / -2;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }
`;

export default AppTheme;
