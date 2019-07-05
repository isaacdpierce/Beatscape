// ! This is where I can do fetch and promise resolving
import { Howl, Howler } from 'howler';

const makeSoundlist = () => {
  const kick = 'Assets/audio/dusty-road/kick.mp3';
  const Snare = 'Assets/audio/dusty-road/snare.mp3';
  const percussion = 'Assets/audio/dusty-road/bass.mp3';
  const cymbals = 'Assets/audio/dusty-road/cymbals.mp3';
  const accessory = 'Assets/audio/dusty-road/piano.mp3';
  const melody = 'Assets/audio/dusty-road/melody.mp3';
  const harmony = 'Assets/audio/dusty-road/harmony.mp3';
  const instrument = 'Assets/audio/dusty-road/instrument.mp3';
  const atmosphere = 'Assets/audio/dusty-road/chords.mp3';
  const environment = 'Assets/audio/dusty-road/atmospheric.mp3';
  const sprites = 'Assets/audio/dusty-road/sprites.mp3';
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
  return soundList;
};

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
