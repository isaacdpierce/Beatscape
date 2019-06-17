import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import About from 'Routes/About/About';
import Guide from 'Routes/Guide/Guide';
import Machine from 'Components/Machine/Machine';
import Header from 'Components/Header/Header';
import Footer from 'Components/Footer/Footer';
import STORE from 'Context/STORE';

import { MachineProvider } from 'Context/MachineContext';

import AppTheme from './AppTheme.js';

function App() {
  const initialBackgroundLevel = 75;

  const [masterVolume, setMasterVolume] = useState(0.5);
  const [masterFader, setMasterFader] = useState(0.5);

  const [isAnimated, setIsAnimated] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [backgroundLevel, setBackgroundLevel] = useState(
    initialBackgroundLevel
  );

  useEffect(() => {
    isAnimated ? setIsPlaying(true) : setIsPlaying(false);
  }, [isAnimated]);

  const changeMasterVolume = newVol => {
    setMasterVolume(newVol);
  };

  const changeMasterFader = newFade => {
    setMasterFader(newFade);
  };
  const toggleAnimation = () => {
    setIsAnimated(!isAnimated);
  };

  const togglePlay = () => {
    setIsAnimated(false);
    setIsPlaying(!isPlaying);
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
      }}
    >
      <AppTheme className='App' backgroundLevel={backgroundLevel}>
        <Header />
        <main>
          <Route exact path='/' component={Machine} />
          <Route exact path='/about' component={About} />
          <Route exact path='/guide' component={Guide} />
        </main>
        <Footer />
      </AppTheme>
    </MachineProvider>
  );
}

export default App;
