import {
  getRandomFloat,
  getRandomInteger,
  roundCorrect,
} from 'assets/helpers/helpers';

export const animateTracks = (value, masterVolume, next, setValue, setNext) => {
  setTimeout(() => {
    if (value > masterVolume) {
      setValue(masterVolume - 0.01);
    } else if (value > next) {
      setValue(roundCorrect(value - 0.01, 2));
    } else if (value < next) {
      setValue(roundCorrect(value + 0.01, 2));
    } else if (value === next) {
      const newNum = getRandomFloat(0, masterVolume);
      setNext(roundCorrect(newNum - 0.01, 2));
    }
  }, getRandomInteger(100, 1000));
  return () => clearTimeout(animateTracks);
};
