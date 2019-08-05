import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import About from 'Routes/About/About';
import Guide from 'Routes/Guide/Guide';
import ComingSoon from 'Routes/ComingSoon/ComingSoon';
import Machine from 'Components/Machine/Machine';
import Header from 'Components/Header/Header';
import Footer from 'Components/Footer/Footer';
import useBeatscapeApi from 'Assets/hooks/useBeatscapeApi';

import { MachineProvider } from 'Context/MachineContext';

import AppTheme from './AppTheme';

function App() {
  const [isAnimated, setIsAnimated] = useState(false);

  const [
    {
      musicData,
      musicTracks,
      isLoading,
      isError,
      errorMsg,
      isPlaying,
      spriteData,
      spriteTrack,
      environmentTrack,
      environmentData,
    },
    setIsLoading,
    setIsError,
    setErrorMsg,
    setMusicUrl,
    setIsPlaying,
    setSpriteUrl,
    setEnvironmentUrl,
    setSpriteTrack,
    setEnvironmentTrack,
  ] = useBeatscapeApi(
    'http://localhost:8000/api/soundscapes/1',
    'http://localhost:8000/api/sprites/1',
    'http://localhost:8000/api/environments/1'
  );

  useEffect(() => {
    isAnimated ? setIsPlaying(true) : setIsPlaying(false);
    // eslint-disable-next-line
  }, [isAnimated]);

  return (
    <MachineProvider
      value={{
        isAnimated,
        setIsAnimated,
        isPlaying,
        setIsPlaying,
        isLoading,
        setIsLoading,
        musicData,
        musicTracks,
        setMusicUrl,
        spriteTrack,
        setSpriteTrack,
        spriteData,
        setSpriteUrl,
        environmentTrack,
        setEnvironmentTrack,
        environmentData,
        setEnvironmentUrl,
        isError,
        setIsError,
        errorMsg,
        setErrorMsg,
      }}
    >
      <AppTheme className='App'>
        <Header />
        <main>
          <Route exact path='/' component={Machine} />
          <Route exact path='/about' component={About} />
          <Route exact path='/guide' component={Guide} />
          <Route exact path='/coming-soon' component={ComingSoon} />
        </main>
        <Footer />
      </AppTheme>
    </MachineProvider>
  );
}

export default App;
