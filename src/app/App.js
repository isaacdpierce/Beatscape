import React from 'react';
import { Route } from 'react-router-dom';
import About from '../routes/About/About';
import Machine from '../components/Machine/Machine';
import Header from '../components/Header/Header';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Route exact path='/' component={Machine} />
        <Route exact path='/animated' component={Machine} />
        <Route exact path='/about' component={About} />
      </main>
    </div>
  );
}

export default App;
