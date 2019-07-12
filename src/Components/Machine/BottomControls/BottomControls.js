import React from 'react';
import PropTypes from 'prop-types';
import LinkButton from 'Components/Machine/Buttons/Button';
import MasterVolume from 'Components/Machine/BottomControls/MasterControls/MasterVolume';
import Fader from 'Components/Machine/BottomControls/MasterControls/MasterFader';

import './BottomControls.css';

const BottomControls = ({ handleDrawer }) => (
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

BottomControls.propTypes = {
  handleDrawer: PropTypes.func.isRequired,
};

export default BottomControls;
