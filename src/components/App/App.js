import React from 'react';
import Machine from '../Machine/Machine';
import Header from '../Header/Header';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Machine />
      </main>
    </div>
  );
}

export default App;
