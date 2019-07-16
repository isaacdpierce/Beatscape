import { useEffect, useRef } from 'react';

const getRandomInteger = (num1, num2) => {
  const min = Math.ceil(num1);
  const max = Math.floor(num2);
  return Math.floor(Math.random() * (max - min)) + min;
};

function getRandomFloat(min, max, prec = 2) {
  return parseFloat(
    Math.min(min + Math.random() * (max - min), max).toFixed(prec)
  );
}

function roundCorrect(num, precision = 2) {
  return parseFloat(num.toFixed(precision));
}

const getNextLevel = (min, max) => getRandomFloat(min, max);

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
};
