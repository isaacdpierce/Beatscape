const machineState = {
  isLoading: false,
  isPlaying: false,
  isAnimated: false,
  isError: false,
  showInstructions: true,
  errorMsg: 'Something went wrong. Try another selection.',
  musicUrl: 'http://localhost:8000/api/soundscapes/1',
  musicData: undefined,
  musicTracks: undefined,
  spriteUrl: 'http://localhost:8000/api/sprites/1',
  spriteData: undefined,
  spriteTrack: undefined,
  environmentUrl: 'http://localhost:8000/api/environments/1',
  environmentData: undefined,
  environmentTrack: undefined,
  sceneType: 'City',
  musicTimer: 0,
};

export default machineState;
