import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import About from 'Routes/About/About';
import Guide from 'Routes/Guide/Guide';
import ComingSoon from 'Routes/ComingSoon/ComingSoon';
import Machine from 'Components/Machine/Machine';
import Header from 'Components/Header/Header';
import Footer from 'Components/Footer/Footer';
import { useBeatscapeApi } from 'Assets/hooks/hooks';

import { MachineProvider } from 'Context/MachineContext';

import AppTheme from './AppTheme.js';

function App() {
  const [masterVolume, setMasterVolume] = useState(0.5);
  const [masterFader, setMasterFader] = useState(0.5);

  const [
    { data, isLoading, isError, isPlaying, isAnimated },
    setUrl,
    setIsPlaying,
    setIsAnimated,
  ] = useBeatscapeApi('http://localhost:8000/api/soundscapes/2');

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    isAnimated ? setIsPlaying(true) : setIsPlaying(false);
  }, [isAnimated, setIsPlaying]);

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
        masterVolume,
        changeMasterVolume,
        isAnimated,
        toggleAnimation,
        isPlaying,
        isLoading,
        togglePlay,
        masterFader,
        changeMasterFader,
        data,
        setUrl,
      }}
    >
      <AppTheme className='App'>
        {/* // TODO Put loader in popup component // Style error msg  */}
        {isError && <div>Something went wrong... try another selection.</div>}
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
