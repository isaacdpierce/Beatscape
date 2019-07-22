import styled from 'styled-components';

const StyledToolTip = styled.div`
  padding: 0rem 1.5rem;
  background-color: rgba(0, 0, 0, 0.461);
  border-radius: 6px;
  color: #fff;
  text-align: center;
  position: absolute;
  top: 25rem;
  z-index: 1;
  transition: opacity 0.5s ease-in-out;
  opacity: 0;
  width: 17rem;
  cursor: default;

  p {
    font-size: 13px;
    color: rgba(255, 255, 255, 0);
    transition: color 2s ease-in-out;
  }
`;

export default StyledToolTip;
