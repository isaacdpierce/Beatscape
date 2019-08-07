import React, { useEffect, useReducer } from 'react';
import { Route } from 'react-router-dom';
import About from 'Routes/About/About';
import Guide from 'Routes/Guide/Guide';
import ComingSoon from 'Routes/ComingSoon/ComingSoon';
import Machine from 'Components/Machine/Machine';
import Header from 'Components/Header/Header';
import Footer from 'Components/Footer/Footer';
import machineState from 'Assets/state/machineState';
import reducer from 'Assets/reducers/reducer.js';
import { makeTracks, getRandomIndex } from 'Assets/helpers/helpers';
import axios from 'axios';

import { MachineProvider } from 'Context/MachineContext';
import { SetMachineProvider } from 'Context/SetMachineContext';

import AppTheme from './AppTheme';

function App() {
  const [state, setState] = useReducer(reducer, machineState);
  const { isAnimated, musicUrl, spriteUrl, environmentUrl } = state;

  useEffect(() => {
    isAnimated ? setState({ isPlaying: true }) : setState({ isPlaying: false });
    // eslint-disable-next-line
  }, [isAnimated]);

  useEffect(() => {
    if (musicUrl) {
      const fetchData = async () => {
        setState({ isLoading: true, isPlaying: false, isError: false });
        try {
          const result = await axios(musicUrl);
          setState({ musicData: result.data });
          const { stems } = result.data;
          const trackList = await makeTracks(stems);

          setState({ musicTracks: trackList });
        } catch (error) {
          setState({
            isError: true,
            errorMsg: 'There was a problem loading you music selection.',
          });
        }

        setState({ isLoading: false });
      };

      fetchData();
    }
    // eslint-disable-next-line
    }, [musicUrl]);

  useEffect(() => {
    if (spriteUrl) {
      const fetchSpriteData = async () => {
        setState({ isError: false });
        try {
          const result = await axios(spriteUrl);

          const spritesArray = await result.data.map(
            sprite => sprite.sprite_url
          );
          setState({ spriteData: spritesArray });
          const spriteStem = await spritesArray[getRandomIndex(spritesArray)];
          setState({ spriteTrack: spriteStem });
        } catch (error) {
          setState({
            isError: true,
            errorMsg: 'There was a problem loading you sprites selection.',
          });
        }
      };

      fetchSpriteData();
    }
    // eslint-disable-next-line
    }, [spriteUrl]);

  useEffect(() => {
    if (environmentUrl) {
      const fetchEnvironmentData = async () => {
        setState({ isError: false });
        try {
          const result = await axios(environmentUrl);
          const environmentsArray = await result.data.map(
            environment => environment.environment_url
          );
          setState({ environmentData: environmentsArray });
          const environmentStem = await environmentsArray[
            getRandomIndex(environmentsArray)
          ];
          setState({ environmentTrack: environmentStem });
        } catch (error) {
          setState({
            isError: true,
            errorMsg: 'There was a problem loading you environment selection.',
          });
        }
      };
      fetchEnvironmentData();
    }
    // eslint-disable-next-line
  }, [environmentUrl]);

  return (
    <MachineProvider value={state}>
      <SetMachineProvider value={setState}>
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
      </SetMachineProvider>
    </MachineProvider>
  );
}

export default App;
