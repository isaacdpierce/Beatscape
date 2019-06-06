import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { AnimationProvider } from './context/AnimationContext';

import './assets/variables/variables.css';

const state = {
  tracks: [],
  isAnimated: false,
  isPlaying: false,
  toggleAnimate: isAnimated => (isAnimated = !isAnimated),
  masterVolume: 50,
};

ReactDOM.render(
  <Router>
    <AnimationProvider value={state}>
      <App />
    </AnimationProvider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
