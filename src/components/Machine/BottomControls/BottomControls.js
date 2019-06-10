import React from 'react';
import LinkButton from '../Buttons/Button';
import MasterVolume from '../MasterControls/MasterVolume';
import Fader from '../MasterControls/Fader';

import './BottomControls.css';

const BottomControls = ({ handleDrawer }) => {
  return (
    <section className='controls-bottom'>
      <MasterVolume />
      <Fader />
      <LinkButton
        className='button-soundscapes'
        text='Soundscapes'
        handleClick={handleDrawer}
      />
    </section>
  );
};

export default BottomControls;
