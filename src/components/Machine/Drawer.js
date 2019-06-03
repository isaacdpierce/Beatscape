import React from 'react';
import { useState } from 'react';
import Button from './Button';

import './Drawer.css';

const drawerOpen = {
  transform: 'translateY(0%)',
};
const drawerClosed = {
  transform: 'translateY(-100%)',
};

const Drawer = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);
  return (
    <>
      <section className='drawer' style={open ? drawerOpen : drawerClosed}>
        <div>
          <h3>Tokyo Rain</h3>
          <h3>New York Hustle</h3>
        </div>
        <div>
          <h3>Forest Walk</h3>
          <h3>Industrial</h3>
        </div>
      </section>
      <Button
        className='button-soundscapes'
        text='Soundscapes'
        type='controls'
        handleClick={handleClick}
      />
    </>
  );
};

export default Drawer;
