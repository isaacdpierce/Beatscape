// ! This is where I can do fetch and promise resolving
import { Howl, Howler } from 'howler';

import kick from 'Assets/audio/dusty-road/kick.mp3';
import Snare from 'Assets/audio/dusty-road/snare.mp3';
import percussion from 'Assets/audio/dusty-road/bass.mp3';
import cymbals from 'Assets/audio/dusty-road/cymbals.mp3';
import accessory from 'Assets/audio/dusty-road/piano.mp3';
import melody from 'Assets/audio/dusty-road/melody.mp3';
import harmony from 'Assets/audio/dusty-road/harmony.mp3';
import instrument from 'Assets/audio/dusty-road/instrument.mp3';
import atmosphere from 'Assets/audio/dusty-road/chords.mp3';
import environment from 'Assets/audio/dusty-road/atmospheric.mp3';
import sprites from 'Assets/audio/dusty-road/sprites.mp3';

const soundList = [
  kick,
  Snare,
  percussion,
  cymbals,
  accessory,
  melody,
  harmony,
  instrument,
  atmosphere,
  environment,
  sprites,
];

// TODO change to react-sound library - more control

const stems = soundList.map((stem, i) => {
  return new Howl({
    src: stem,
    autoplay: false,
    loop: true,
    volume: 0.5,
  });
});

export default stems;
