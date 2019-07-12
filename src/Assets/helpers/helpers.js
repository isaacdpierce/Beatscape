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
  // half epsilon to correct edge cases.
  const c = 0.5 * Number.EPSILON * num;
  //	let p = Math.pow(10, precision); //slow
  let p = 1;
  // eslint-disable-next-line no-plusplus
  while (precision-- > 0) p *= 10;
  if (num < 0) p *= -1;
  return Math.round((num + c) * p) / p;
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
