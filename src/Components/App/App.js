import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import About from 'Routes/About/About';
import Guide from 'Routes/Guide/Guide';
import ComingSoon from 'Routes/ComingSoon/ComingSoon';
import Machine from 'Components/Machine/Machine';
import Header from 'Components/Header/Header';
import Footer from 'Components/Footer/Footer';
import useBeatscapeApi from 'Assets/hooks/useBeatscapeApi';
import useSceneApi from 'Assets/hooks/useSceneApi';

import { MachineProvider } from 'Context/MachineContext';

import AppTheme from './AppTheme';

function App() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isError, setIsError] = useState(false);

  const [
    { musicData, isLoading, setIsLoading, isMusicError, isPlaying },
    setUrl,
    setIsPlaying,
  ] = useBeatscapeApi('http://localhost:8000/api/soundscapes/1');

  const [
    {
      isSceneError,
      spriteData,
      spriteTrack,
      environmentData,
      environmentTrack,
    },
    setSpriteUrl,
    setSpriteTrack,
    setEnvironmentUrl,
    setEnvironmentTrack,
  ] = useSceneApi(
    'http://localhost:8000/api/sprites/1',
    'http://localhost:8000/api/environments/1'
  );

  useEffect(() => {
    if (isSceneError) {
      setIsError(true);
      setErrorMsg('There was a problem loading your scene sounds.');
    }
    // eslint-disable-next-line
 }, [isSceneError]);

  useEffect(() => {
    if (isMusicError) {
      setIsError(true);
      setErrorMsg('There was a problem loading your music files.');
    }
    // eslint-disable-next-line
  }, [isMusicError]);

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
        setUrl,
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
