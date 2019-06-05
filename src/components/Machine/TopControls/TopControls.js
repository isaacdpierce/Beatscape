import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import AnimateButton from '../AnimateButtons/AnimateButton';
import StopAnimateButton from '../AnimateButtons/StopAnimateButton';
import Button from '../Button';
import headphones from '../../../assets/images/headphones.png';

import './TopControls.css';

const TopControls = ({ handleAnimate, handlePlay }) => {
  return (
    <section className='controls-top'>
      <div className='buttons-play'>
        <NavLink to='/'>
          <Button text='Play' type='controls' handleClick={handlePlay} />
        </NavLink>
        <figure className='headphones'>
          <figcaption className='headphones__tooltip'>
            ?<p className='tooltiptext'>For 3D Soundscapes use headphones</p>
          </figcaption>
          <img
            className='headphones__img'
            src={headphones}
            alt='Wear headphones'
          />
        </figure>
        <Route
          exact
          path='/'
          render={props => <AnimateButton handleAnimate={handleAnimate} />}
        />
        {/* TODO Make handler for stopping animation handleStopAnimate */}
        <Route exact path='/animated' render={props => <StopAnimateButton />} />
      </div>
    </section>
  );
};

export default TopControls;
