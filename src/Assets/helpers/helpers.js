import { useEffect, useRef } from 'react';
import { Howl, Howler } from 'howler';

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

const makeSoundList = stems => {
  return stems.map(stem => {
    const { urls } = stem;
    return new Howl({
      src: urls[0],
      autoplay: false,
      loop: true,
      volume: 0.5,
    });
  });
};

const makeTrackList = (sounds, Oscillator) => {
  return [
    {
      id: 1,
      type: 'Kick',
      animate: true,
      sound: sounds[0],
    },
    {
      id: 2,
      type: 'Snare',
      animate: true,
      sound: sounds[1],
    },
    {
      id: 3,
      type: 'Percussion',
      animate: true,
      sound: sounds[2],
    },
    {
      id: 4,
      type: 'Cymbals',
      animate: true,
      sound: sounds[3],
    },
    {
      id: 5,
      type: 'Accessory',
      animate: true,
      sound: sounds[4],
    },
    {
      id: 6,
      type: 'Melody',
      animate: true,
      sound: sounds[5],
    },
    {
      id: 7,
      type: 'Harmony',
      animate: true,
      sound: sounds[6],
    },
    {
      id: 8,
      type: 'Instrument',
      animate: true,
      sound: sounds[7],
    },
    {
      id: 9,
      type: 'Atmosphere',
      animate: true,
      sound: sounds[8],
    },
    {
      id: 10,
      type: 'Environment',
      animate: true,
      sound: sounds[9],
    },
    {
      id: 11,
      type: 'Sprites',
      animate: true,
      sound: sounds[10],
    },
    {
      id: 12,
      type: 'Binaural',
      animate: false,
      sound: Oscillator,
    },
  ];
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
  makeTrackList,
  makeSoundList,
};
