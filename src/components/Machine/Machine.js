import React from 'react';
import TopControls from './TopControls';
import Drawer from './Drawer';
import './Machine.css';

const Machine = () => {
  return (
    <section className='machine'>
      <TopControls />
      <Drawer />
    </section>
  );
};

export default Machine;
