import { createContext } from 'react';

const audioContext = new AudioContext();
const useAudioContext = createContext({ audioContext });

export default useAudioContext;
