import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import About from '../routes/About/About';
import Guide from '../routes/Guide/Guide';
import Machine from '../components/Machine/Machine';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import STORE from '../context/STORE';

import { MachineProvider } from '../context/MachineContext';
import Oscillator from '../components/Oscillator/Oscillator';

import AppTheme from './AppTheme.js';

function App() {
  const initialBackgroundLevel = 75;

  const [masterVolume, setMasterVolume] = useState(500);
  const [masterFader, setMasterFader] = useState(500);
  const [frequency, setFrequency] = useState(40);
  const [isAnimated, setIsAnimated] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [backgroundLevel, setBackgroundLevel] = useState(
    initialBackgroundLevel
  );

  const changeMasterVolume = newVol => {
    setMasterVolume(newVol);
  };

  const changeMasterFader = newFade => {
    console.log('Master Fader is set to' + masterFader);

    setMasterFader(newFade);
  };
  const toggleAnimation = () => {
    setIsAnimated(!isAnimated);
    setIsPlaying(false);
  };

  const playTracks = () => {
    const bassBoost = masterVolume / 100;
    setTimeout(() => {
      setBackgroundLevel(initialBackgroundLevel + bassBoost);
    }, 500);
    setBackgroundLevel(initialBackgroundLevel);
    return () => clearTimeout(playTracks);
  };

  useEffect(() => {
    isPlaying && playTracks();
  }, [isPlaying]);

  const togglePlay = () => {
    setIsAnimated(false);
    setIsPlaying(!isPlaying);
  };

  const changeFrequency = value => {
    setFrequency(value);
  };

  return (
    <MachineProvider
      value={{
        STORE,
        masterVolume,
        changeMasterVolume,
        isAnimated,
        toggleAnimation,
        isPlaying,
        togglePlay,
        masterFader,
        changeMasterFader,
        changeFrequency,
      }}
    >
      <AppTheme className='App' backgroundLevel={backgroundLevel}>
        <Header />
        <main>
          <Route exact path='/' component={Machine} />
          <Route exact path='/about' component={About} />
          <Route exact path='/guide' component={Guide} />
          <Oscillator frequency={frequency} type={'sine'} />
        </main>
        <Footer />
      </AppTheme>
    </MachineProvider>
  );
}

export default App;
