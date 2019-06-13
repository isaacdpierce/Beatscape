# NOTES

## Binaural not showing up
  
        - Check if volume can be affected with Slider component state
        - can it be imported into Store and set as the sound source?
  
## consider removing master volume - let master volume be controlled by device

## Create frequency controller for binaural

        - set volume controller in slider??
        - eventually create a volume reducer for all sliders

## Create a base timer that all tracks will sync to

        - Create a base timer that all tracks will sync to
        - Volume fades in and out as tracks transition

## FIX

        - When switching from play to animate after having made adjustments it gets NaN on some number values
        - possible: number inputs need to change their source for initial value

Starter test file - failing because of audioContext

App.test.js

        ```js
        import React from 'react';
        import ReactDOM from 'react-dom';
        import { BrowserRouter as Router } from 'react-router-dom';
        import App from './App';

        it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
        <Router>
        <App />
        </Router>,
        div
        );
        ReactDOM.unmountComponentAtNode(div);
        });
        ```
