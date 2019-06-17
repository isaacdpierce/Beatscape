import React from 'react';
import LinkButton from 'components/Machine/Buttons/Button';
import MasterVolume from 'components/Machine/BottomControls/MasterControls/MasterVolume';
import Fader from 'components/Machine/BottomControls/MasterControls/MasterFader';

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
