import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button';

const AnimateButton = () => {
  return (
    <NavLink to='/animated'>
      <Button text='Animate' type='controls' />
    </NavLink>
  );
};

export default AnimateButton;
