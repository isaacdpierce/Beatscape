import { useEffect, useRef } from 'react';

const getRandomInteger = (num1, num2) => {
  const min = Math.ceil(num1);
  const max = Math.floor(num2);
  return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomFloat = (min, max, prec = 2) =>
  parseFloat(Math.min(min + Math.random() * (max - min), max).toFixed(prec));

const roundCorrect = (num, precision = 2) => parseFloat(num.toFixed(precision));

const getNextLevel = (min, max) => getRandomFloat(min, max);

const getSource = sources => {
  if (sources.length > 0) {
    return sources[getRandomInteger(0, sources.length)];
  }
  return null;
};

const makeTracks = audio =>
  audio.map((stem, index) => {
    const { stemName, animate, sources } = stem;
    return {
      id: index + 1,
      stemName,
      animate,
      sound: getSource(sources),
    };
  });

const setSliderValue = type => {
  if (type === 'Binaural') {
    return 0.05;
  }
  if (type === 'sprites' || type === 'environment') {
    return 0.25;
  }
  return 0.5;
};

// Custom hook - Use instead of setInterval() for animations
// got from https://overreacted.io/making-setinterval-declarative-with-react-hooks/
const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export {
  getRandomInteger,
  getRandomFloat,
  useInterval,
  getNextLevel,
  roundCorrect,
  makeTracks,
  setSliderValue,
};
