import {
  getRandomFloat,
  getRandomInteger,
  roundCorrect,
} from 'assets/helpers/helpers';

export const animateTracks = (value, min, max, next, setValue, setNext) => {
  setTimeout(() => {
    if (value > next) {
      setValue(roundCorrect(value - 0.01, 2));
    } else if (value < next) {
      setValue(roundCorrect(value + 0.01, 2));
    } else if (value === next) {
      const newNum = getRandomFloat(min, max);
      setNext(roundCorrect(newNum - 0.01, 2));
    }
  }, getRandomInteger(100, 1000));
  return () => clearTimeout(animateTracks);
};
