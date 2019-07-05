import stems from './soundList';
import Oscillator from 'Components/Oscillator/Oscillator';

const STORE = {
  tracks: [
    {
      id: 1,
      type: 'kick',
      description:
        'The heavy drum that keeps the pace of the song moving forward.',
      animate: true,
      sound: stems[0],
    },
    {
      id: 2,
      type: 'Snare',
      description: 'Light drum',
      animate: true,
      sound: stems[1],
    },
    {
      id: 3,
      type: 'Percussion',
      description: 'Hand drums, tom toms and garbage cans',
      animate: true,
      sound: stems[2],
    },
    {
      id: 4,
      type: 'Cymbals',
      description: 'Crash',
      animate: true,
      sound: stems[3],
    },
    {
      id: 5,
      type: 'Accessory',
      description: 'Cowbells, triangles',
      animate: true,
      sound: stems[4],
    },
    {
      id: 6,
      type: 'Melody',
      description: 'Lalalalalalala',
      animate: true,
      sound: stems[5],
    },
    {
      id: 7,
      type: 'Harmony',
      description: 'Dumdumdumdumdeedah',
      animate: true,
      sound: stems[6],
    },
    {
      id: 8,
      type: 'Instrument',
      description: 'Piano, sax, banjo, kazoo',
      animate: true,
      sound: stems[7],
    },
    {
      id: 9,
      type: 'Atmosphere',
      description: 'Baselines, Synthlines',
      animate: true,
      sound: stems[8],
    },
    {
      id: 10,
      type: 'Environment',
      description: 'Cracklings, white noise, rainfall',
      animate: true,
      sound: stems[9],
    },
    {
      id: 11,
      type: 'Sprites',
      description: 'Infrequent sound chunks - blahdiddyblahblah',
      animate: true,
      sound: stems[10],
    },
    {
      id: 12,
      type: 'Binaural',
      description: '40hz, 50hz, 60hz',
      animate: false,
      sound: Oscillator,
    },
  ],
};

export default STORE;
