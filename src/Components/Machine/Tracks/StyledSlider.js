import styled from 'styled-components';

export const SliderContainer = styled.section.attrs({
  className: 'slider',
})`
  margin-right: 1rem;
  transform: translate(-1rem, 15rem);

  @media (max-width: 850px) {
    margin-right: 0;
    transform: none;
  }
`;

export const StyledSlider = styled.div`
  display: flex;
  flex-direction: column;
  transform: rotate(-90deg);
  width: 1rem;
  position: relative;

  .slider__label {
    display: inline-block;
    color: var(--main-font-color-dark);
    transform: translateY(6px);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 12px;
    font-weight: 300;
  }

  .slider__value {
    display: block;
    font-size: 1rem;
    transform: rotate(90deg) translate(20.7rem, 17rem);
    width: 30rem;
  }

  input {
    width: 34rem;
  }

  @media (max-width: 850px) {
    display: block;
    transform: none;
    width: 100%;

    .slider__label {
      transform: none;
      display: grid;
      grid-column-gap: 2.3rem;
      grid-row-gap: 25rem;
    }

    .slider__value {
      display: inline;
      transform: none;
    }

    input {
      margin: 2.3rem 0;
      width: 60vw;
    }
  }
`;
