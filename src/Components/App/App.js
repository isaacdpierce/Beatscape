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

import AppTheme from './AppTheme';

function App() {
  const [isAnimated, setIsAnimated] = useState(false);

  const [
    { data, isLoading, isError, isPlaying },
    setUrl,
    setIsPlaying,
  ] = useBeatscapeApi('http://localhost:8000/api/soundscapes/1');

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
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
        isLoading,
        togglePlay,
        data,
        setUrl,
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
