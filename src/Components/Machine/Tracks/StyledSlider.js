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
    width: 340px;
  }

  @media (max-width: 850px) {
    display: block;
    transform: none;
    width: 100%;

    .slider__label {
      transform: none;
      display: grid;
      grid-column-gap: 1rem;
      grid-row-gap: 5rem;
    }

    .slider__value {
      display: inline;
      transform: none;
    }

    input {
      margin: 1rem 0;
      width: 60vw;
    }
  }
`;

export const SliderContainer = styled.section`
  margin-right: 10px;
  transform: translate(-10px, 150px);

  @media (max-width: 850px) {
    margin-right: 0;
    transform: none;
  }
`;
