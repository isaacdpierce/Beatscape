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

const getRandomIndex = sourceArray => getRandomInteger(0, sourceArray.length);

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

const makeHTMLAudio = (sound, type) => {
  const audioHTML = new Audio();
  audioHTML.src = sound;
  audioHTML.crossOrigin = 'anonymous';
  audioHTML.loop = type !== 'environment' && type !== 'sprites';
  audioHTML.preload = true;

  return audioHTML;
};

const getNewAudio = (type, spriteData, environmentData) => {
  if (type === 'sprites') {
    const spriteStem = spriteData[getRandomIndex(spriteData)];

    return makeHTMLAudio(spriteStem, 'sprites');
  }
  if (type === 'environments') {
    const environmentStem = environmentData[getRandomIndex(environmentData)];
    return makeHTMLAudio(environmentStem, 'environments');
  }
};

const setSliderValue = type => {
  if (type === 'Binaural' || type === 'sprites' || type === 'environment') {
    return 0.05;
  }
  return 0.5;
};

export {
  getRandomInteger,
  getRandomFloat,
  getNextLevel,
  roundCorrect,
  makeTracks,
  makeHTMLAudio,
  getNewAudio,
  getSource,
  setSliderValue,
  getRandomIndex,
};
