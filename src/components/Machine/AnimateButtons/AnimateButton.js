import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button';

const AnimateButton = ({ handleAnimate }) => {
  return (
    <NavLink to='/animated'>
      <Button text='Animate' type='controls' handleClick={handleAnimate} />
    </NavLink>
  );
};

export default AnimateButton;
