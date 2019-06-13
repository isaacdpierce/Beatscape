import styled from 'styled-components';

const SliderTheme = styled.div`
  display: flex;
  flex-direction: column;
  transform: rotate(-90deg) translate(-140px, -12px);
  width: 10px;
  height: 50px;
  position: relative;

  &&__label {
    display: inline - block;
    transform: translate(5px, -9px);
    color: var(--main - font - color - dark);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.5rem;
    font-weight: 300;
  }

  &&__value {
    display: block;
    font-size: 10px;
    transform: rotate(90deg) translate(160px, 170px);
    width: 300px;
  }

  input {
    width: 300px;
  }

  @media only screen and(max-width: 850px) {
    transform: rotate(0deg) translateX(-150px);
    height: 10px;
    width: 50px;
  }
`;

export default SliderTheme;
