import { config } from 'config';

const machineState = {
  isLoading: false,
  isPlaying: false,
  isAnimated: false,
  isError: false,
  showInstructions: true,
  errorMsg: 'Something went wrong. Try another selection.',
  baseUrl: config.url.API_URL,
  musicUrl: '/api/soundscapes/1',
  musicData: undefined,
  musicTracks: undefined,
  spriteUrl: '/api/sprites/1',
  spriteData: undefined,
  spriteTrack: undefined,
  environmentUrl: '/api/environments/1',
  environmentData: undefined,
  environmentTrack: undefined,
  sceneType: 'City',
  musicTimer: 0,
};

export default machineState;
