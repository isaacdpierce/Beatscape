import { Howl, Howler } from 'howler';
import kick from 'assets/audio/dusty-road/kick.mp3';
import bass from 'assets/audio/dusty-road/bass.mp3';
import atmospheric from 'assets/audio/dusty-road/atmospheric.mp3';
import chords from 'assets/audio/dusty-road/chords.mp3';
import cymbals from 'assets/audio/dusty-road/cymbals.mp3';
import harmony from 'assets/audio/dusty-road/harmony.mp3';
import instrument from 'assets/audio/dusty-road/instrument.mp3';
import melody from 'assets/audio/dusty-road/melody.mp3';
import piano from 'assets/audio/dusty-road/piano.mp3';
import snare from 'assets/audio/dusty-road/snare.mp3';
import sprites from 'assets/audio/dusty-road/sprites.mp3';
import Oscillator from 'components/Oscillator/Oscillator';

const STORE = {
  tracks: [
    {
      id: 1,
      type: 'kick',
      description:
        'The heavy drum that keeps the pace of the song moving forward.',
      animate: true,
      sound: new Howl({
        src: [kick],
        autoplay: false,
        loop: true,
        volume: 0.5,
      }),
    },
    {
      id: 2,
      type: 'Snare',
      description: 'Light drum',
      animate: true,
      sound: new Howl({
        src: [snare],
        autoplay: false,
        loop: true,
        volume: 0.5,
      }),
    },
    {
      id: 3,
      type: 'Percussion',
      description: 'Hand drums, tom toms and garbage cans',
      animate: true,
      sound: new Howl({
        src: [bass],
        autoplay: false,
        loop: true,
        volume: 1,
      }),
    },
    {
      id: 4,
      type: 'Cymbals',
      description: 'Crash',
      animate: true,
      sound: new Howl({
        src: [cymbals],
        autoplay: false,
        loop: true,
        volume: 0.5,
      }),
    },
    {
      id: 5,
      type: 'Accessory',
      description: 'Cowbells, triangles',
      animate: true,
      sound: new Howl({
        src: [piano],
        autoplay: false,
        loop: true,
        volume: 0.5,
      }),
    },
    {
      id: 6,
      type: 'Melody',
      description: 'Lalalalalalala',
      animate: true,
      sound: new Howl({
        src: [chords],
        autoplay: false,
        loop: true,
        volume: 0.5,
      }),
    },
    {
      id: 7,
      type: 'Harmony',
      description: 'Dumdumdumdumdeedah',
      animate: true,
      sound: new Howl({
        src: [harmony],
        autoplay: false,
        loop: true,
        volume: 0.5,
      }),
    },
    {
      id: 8,
      type: 'Instrument',
      description: 'Piano, sax, banjo, kazoo',
      animate: true,
      sound: new Howl({
        src: [instrument],
        autoplay: false,
        loop: true,
        volume: 0.5,
      }),
    },
    {
      id: 9,
      type: 'Soundscape',
      description: 'Baselines, Synthlines',
      animate: true,
      sound: new Howl({
        src: [melody],
        autoplay: false,
        loop: true,
        volume: 0.5,
      }),
    },
    {
      id: 10,
      type: 'Texture',
      description: 'Cracklings, white noise, rainfall',
      animate: true,
      sound: new Howl({
        src: [atmospheric],
        autoplay: false,
        loop: true,
        volume: 0.5,
      }),
    },
    {
      id: 11,
      type: 'Sprites',
      description: 'Infrequent sound chunks - blahdiddyblahblah',
      animate: true,
      sound: new Howl({
        src: [sprites],
        autoplay: false,
        loop: true,
        volume: 0.5,
      }),
    },
    // {
    // id: 12,
    //   type: 'Binaural',
    //   min: 0,
    //   max: 1,
    //   step: 0.01,
    //   description: '40hz, 50hz, 60hz',
    //   animate: false,
    //   sound: Oscillator,
    // },
  ],
};

export default STORE;

// const track_2 =
// const track_3 =
// const track_4 =
// const track_5 =
// const track_6 =
// const track_7 =
// const track_8 =

// const track_9 =

// const track_10 =

// const track_11 =

// const track_12 =
