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

  const [
    { data, isLoading, isError, isPlaying },
    setUrl,
    setIsPlaying,
    setIsError,
  ] = useBeatscapeApi('http://localhost:8000/api/soundscapes/1');

  const [
    { isSceneError, spriteData, environmentData },
    setSpriteUrl,
    setEnvironmentUrl,
  ] = useSceneApi(
    'http://localhost:8000/api/sprites/1',
    'http://localhost:8000/api/environments/1'
  );

  // useEffect(() => {
  //   if (sceneData) {
  //     console.log(sceneData);
  //   }
  // }, []);

  useEffect(() => {
    if (isSceneError) {
      setIsError(true);
    }
  }, [isSceneError, setIsError, setUrl]);

  useEffect(() => {
    isAnimated ? setIsPlaying(true) : setIsPlaying(false);
  }, [isAnimated, setIsPlaying]);

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
        isAnimated,
        toggleAnimation,
        isError,
        isPlaying,
        togglePlay,
        isLoading,
        data,
        setUrl,
        spriteData,
        setSpriteUrl,
        environmentData,
        setEnvironmentUrl,
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
