import { createContext } from 'react';

const AudioContext = window.AudioContext || window.webkitAudioContext; // Safari and old versions of Chrome
const audioContext = new AudioContext();
const useAudioContext = createContext({ audioContext });

export default useAudioContext;
