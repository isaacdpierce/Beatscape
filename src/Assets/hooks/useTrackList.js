import { useEffect, useState } from 'react';

const useTrackList = (sounds, data, Oscillator) => {
  const [trackList, setTrackList] = useState(undefined);
  console.log(data);
  useEffect(() => {
    if (sounds) {
      setTrackList([
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
      ]);
    }
  }, [sounds, Oscillator]);
  return trackList;
};

export { useTrackList };
