import React from 'react';
import { Route } from 'react-router-dom';
import AnimateButton from '../AnimateButtons/AnimateButton';
import StopAnimateButton from '../AnimateButtons/StopAnimateButton';
import LinkButton from '../LinkButton';
import Tooltip from '../../themes/Tooltip/Tooltip';

import headphones from '../../../assets/images/headphones.png';

import './TopControls.css';

const TopControls = () => {
  return (
    <section className='controls-top'>
      <div className='buttons-container'>
        <LinkButton to='/' text='Play' type='controls' />
        <figure className='headphones'>
          <img
            className='headphones__img'
            src={headphones}
            alt='Wear headphones'
          />
        </figure>

        <Tooltip size='small'>
          <p>Wear headphones for 3D soundscape</p>
        </Tooltip>
        <Route exact path='/' render={props => <AnimateButton />} />
        {/* TODO Make handler for stopping animation handleStopAnimate */}
        <Route exact path='/animated' render={props => <StopAnimateButton />} />
      </div>
    </section>
  );
};

export default TopControls;
