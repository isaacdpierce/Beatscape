import styled from 'styled-components';

export const StyledSlider = styled.div`
  display: flex;
  flex-direction: column;
  transform: rotate(-90deg);
  width: 10px;
  position: relative;

  .slider__label {
    display: inline-block;
    transform: translate(5px, 5px);
    color: var(--main-font-color-dark);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.5rem;
    font-weight: 300;
  }

  .slider__value {
    display: block;
    font-size: 10px;
    transform: rotate(90deg) translate(195px, 170px);
    width: 300px;
  }

  input {
    width: 350px;
  }

  /* @media only screen and(max-width: 850px) {
    flex-direction: row;
    transform: rotate(90deg) translate(-150px);
    height: 10px;
    width: 500px;
  } */
`;

export const SliderContainer = styled.section`
  margin-right: 10px;
  transform: translate(-10px, 150px);
`;
