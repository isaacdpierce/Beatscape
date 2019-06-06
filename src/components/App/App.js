import React from 'react';
import { Route } from 'react-router-dom';
import About from '../About/About';
import Machine from '../Machine/Machine';
import Header from '../Header/Header';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Route exact path='/' component={Machine} />
        <Route exact path='/animated' component={Machine} />
      </main>
      <Route exact path='/about' component={About} />
    </div>
  );
}

export default App;
