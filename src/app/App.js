import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { Howl, Howler } from 'howler';
import About from 'routes/About/About';
import Guide from 'routes/Guide/Guide';
import Machine from 'components/Machine/Machine';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import STORE from 'context/STORE';

import { MachineProvider } from 'context/MachineContext';

import kick from 'assets/audio/dusty-road/kick.mp3';

import AppTheme from './AppTheme.js';

function App() {
  const initialBackgroundLevel = 75;

  const [masterVolume, setMasterVolume] = useState(1);
  const [masterFader, setMasterFader] = useState(0.5);

  const [isAnimated, setIsAnimated] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [backgroundLevel, setBackgroundLevel] = useState(
    initialBackgroundLevel
  );

  console.log(`Master Vol in App.js: ${masterVolume}`);

  const changeMasterVolume = newVol => {
    setMasterVolume(newVol);
  };

  const changeMasterFader = newFade => {
    setMasterFader(newFade);
  };
  const toggleAnimation = () => {
    setIsAnimated(!isAnimated);
    setIsPlaying(false);
  };

  const playTracks = () => {
    console.log('Tracks Playing!');
  };

  const togglePlay = () => {
    setIsAnimated(false);
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    isPlaying && playTracks();
  }, [isPlaying]);

  const sound = new Howl({
    src: [kick],
    autoplay: true,
    loop: true,
    volume: 0.5,
    onend: function() {
      console.log('Finished!');
    },
  });

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
