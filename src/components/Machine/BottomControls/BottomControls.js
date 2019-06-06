import React from 'react';
import Button from '../Button';
import MasterVolume from '../MasterControls/MasterVolume';
import Fader from '../MasterControls/Fader';

import './BottomControls.css';

const BottomControls = ({ handleDrawer }) => {
  return (
    <section className='controls-bottom'>
      <MasterVolume />
      <Fader />
      <Button
        className='button-soundscapes'
        text='Soundscapes'
        type='controls'
        handleClick={handleDrawer}
      />
    </section>
  );
};

export default BottomControls;
