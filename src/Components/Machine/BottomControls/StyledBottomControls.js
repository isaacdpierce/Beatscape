import styled from 'styled-components';

const StyledBottomControls = styled.section.attrs({
  className: 'bottom-controls',
})`
  grid-column: 1 / -1;
  grid-row: 4 / span 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;
`;

export default StyledBottomControls;
