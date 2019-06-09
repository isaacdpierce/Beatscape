import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import About from '../routes/About/About';
import Guide from '../routes/Guide/Guide';
import Machine from '../components/Machine/Machine';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import STORE from '../context/STORE';

import { MachineProvider } from '../context/MachineContext';

import './App.css';

function App() {
  const [masterVolume, setMasterVolume] = useState(500);
  const [isAnimated, setIsAnimated] = useState(false);
  const [track1Volume, setTrack1Volume] = useState(500);
  console.log('The Master Volume is set in App.js to: ' + masterVolume);

  const changeMasterVolume = newVol => {
    setMasterVolume(newVol);
  };

  const toggleAnimation = () => {
    setIsAnimated(!isAnimated);
  };

  return (
    <MachineProvider
      value={{
        STORE,
        masterVolume,
        changeMasterVolume,
        isAnimated,
        toggleAnimation,
      }}
    >
      <div className='App'>
        <Header />
        <main>
          <Route exact path='/' component={Machine} />
          <Route exact path='/animated' component={Machine} />
          <Route exact path='/about' component={About} />
          <Route exact path='/guide' component={Guide} />
        </main>
        <Footer />
      </div>
    </MachineProvider>
  );
}

export default App;
