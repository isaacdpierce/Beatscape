import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button';

const AnimateButton = ({ handleAnimate }) => {
  return (
    <NavLink to='/'>
      <Button text='Stop Animate' type='controls' />
    </NavLink>
  );
};

export default AnimateButton;
