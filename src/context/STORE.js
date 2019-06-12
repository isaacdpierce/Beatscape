const STORE = {
  tracks: [
    {
      type: 'Kick',
      description:
        'The heavy drum that keeps the pace of the song moving forward.',
      animate: true,
      url: 'assets/audio/dusty-road/kick.mp3',
    },
    { type: 'Snare', description: 'Light drum', animate: true },
    {
      type: 'Percussion',
      description: 'Hand drums, tom toms and garbage cans',
      animate: true,
    },
    { type: 'Cymbal', description: 'Crash', animate: true },
    { type: 'Accessory', description: 'Cowbells, triangles', animate: true },
    { type: 'Melody', description: 'Lalalalalalala', animate: true },
    { type: 'Harmony', description: 'Dumdumdumdumdeedah', animate: true },
    {
      type: 'Instrument',
      description: 'Piano, sax, banjo, kazoo',
      animate: true,
    },
    { type: 'Soundscape', description: 'Baselines, Synthlines', animate: true },
    {
      type: 'Texture',
      description: 'Cracklings, white noise, rainfall',
      animate: true,
    },
    {
      type: 'Sprites',
      description: 'Infrequent sound chunks - blahdiddyblahblah',
      animate: true,
    },
    {
      type: 'Binaural',
      min: 0,
      max: 1,
      step: 0.1,
      description: '40hz, 50hz, 60hz',
      animate: false,
    },
  ],
};

export default STORE;
