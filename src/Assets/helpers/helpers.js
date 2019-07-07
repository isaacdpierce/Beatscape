import { useEffect, useRef } from 'react';

const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

function getRandomFloat(min, max, prec = 2) {
  return parseFloat(
    Math.min(min + Math.random() * (max - min), max).toFixed(prec)
  );
}

function roundCorrect(num, precision = 2) {
  // half epsilon to correct edge cases.
  var c = 0.5 * Number.EPSILON * num;
  //	var p = Math.pow(10, precision); //slow
  var p = 1;
  while (precision-- > 0) p *= 10;
  if (num < 0) p *= -1;
  return Math.round((num + c) * p) / p;
}

const getNextLevel = (min, max) => {
  return getRandomFloat(min, max);
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
      let id = setInterval(tick, delay);
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
