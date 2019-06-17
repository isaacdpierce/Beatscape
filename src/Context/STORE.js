// ! Make import export file for all tracks
// ! Will eventaully be the server call
import { Howl, Howler } from 'howler';
import soundList from './soundList';
import Oscillator from 'Components/Oscillator/Oscillator';

const STORE = {
  tracks: [
    {
      id: 1,
      type: 'kick',
      description:
        'The heavy drum that keeps the pace of the song moving forward.',
      animate: true,
      sound: new Howl({
        src: [soundList[0]],
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
        src: [soundList[1]],
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
        src: [soundList[2]],
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
        src: [soundList[3]],
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
        src: [soundList[4]],
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
        src: [soundList[5]],
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
        src: [soundList[6]],
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
        src: [soundList[7]],
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
        src: [soundList[8]],
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
        src: [soundList[9]],
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
        src: [soundList[10]],
        autoplay: false,
        loop: true,
        volume: 0.5,
      }),
    },
    {
      id: 12,
      type: 'Binaural',
      min: 0,
      max: 1,
      step: 0.01,
      description: '40hz, 50hz, 60hz',
      animate: false,
      sound: Oscillator,
    },
  ],
};

export default STORE;
