import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import About from 'Routes/About/About';
import Guide from 'Routes/Guide/Guide';
import ComingSoon from 'Routes/ComingSoon/ComingSoon';
import Machine from 'Components/Machine/Machine';
import Header from 'Components/Header/Header';
import Footer from 'Components/Footer/Footer';

import { MachineProvider } from 'Context/MachineContext';

import AppTheme from './AppTheme.js';

function App() {
  const initialUrl = 'http://localhost:8000/api/soundscapes/1';
  const [masterVolume, setMasterVolume] = useState(0.5);
  const [masterFader, setMasterFader] = useState(0.5);
  const [isAnimated, setIsAnimated] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [data, setData] = useState(undefined);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  console.log(data);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      setIsLoading(true);
      setIsPlaying(false);
      setIsError(false);

      try {
        const result = await axios(url);
        if (mounted) {
          setData(result.data);
        }
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
    return () => {
      mounted = false;
    };
  }, [url]);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
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
        setData,
        url,
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
