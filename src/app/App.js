import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import About from 'Routes/About/About';
import Guide from 'Routes/Guide/Guide';
import Machine from 'Components/Machine/Machine';
import Header from 'Components/Header/Header';
import Footer from 'Components/Footer/Footer';
import STORE from 'Context/STORE';

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

  useEffect(() => {
    console.log(url);

    const fetchData = async () => {
      setIsPlaying(false);
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);

        setData(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
      setIsPlaying(true);
    };

    fetchData();
  }, [url]);

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
        data,
        setData,
        url,
        setUrl,
      }}
    >
      <AppTheme className='App'>
        {/* // TODO Put loader in popup component // Style error msg  */}
        {isError && <div>Something went wrong... try another selection.</div>}
        {isLoading && <h1>...Loading</h1>}
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
