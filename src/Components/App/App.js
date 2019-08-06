import React, { useEffect } from 'react';
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
  const [
    {
      musicData,
      musicTracks,
      isLoading,
      isError,
      errorMsg,
      isPlaying,
      isAnimated,
      spriteData,
      spriteTrack,
      environmentTrack,
      environmentData,
      sceneType,
    },
    setState,
  ] = useBeatscapeApi();

  useEffect(() => {
    isAnimated ? setState({ isPlaying: true }) : setState({ isPlaying: false });
    // eslint-disable-next-line
  }, [isAnimated]);

  return (
    <MachineProvider
      value={{
        isError,
        errorMsg,
        isLoading,
        isAnimated,
        isPlaying,
        musicData,
        musicTracks,
        spriteTrack,
        spriteData,
        environmentTrack,
        environmentData,
        sceneType,
        setState,
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
