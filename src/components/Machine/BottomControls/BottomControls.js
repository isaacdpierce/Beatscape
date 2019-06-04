import React from 'react';
import Button from '../Button';

import './BottomControls.css';

const BottomControls = ({ handleDrawer }) => {
  // *** TODO *** turn back on click handler on button
  return (
    <section className='controls-bottom'>
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
