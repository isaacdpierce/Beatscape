import { getRandomInteger } from '../assets/helpers/helpers';

// ** Replace with this after refactor for variable in AnimatedTrack

export const animateTracks = (value, masterVolume, next) => {
  const timer = setTimeout(() => {
    if (value > masterVolume) {
      setValue(masterVolume - 1);
    } else if (value > next) {
      setValue(value - 1);
    } else if (value < next) {
      setValue(value + 1);
    } else if (value === next) {
      const newNum = getRandomInteger(0, masterVolume);
      setNext(newNum);
    }
  }, getRandomInteger(100, 1000));
  return () => clearTimeout(timer);
};
