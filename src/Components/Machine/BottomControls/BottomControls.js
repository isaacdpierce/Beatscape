import React from 'react';
import PropTypes from 'prop-types';
import LinkButton from 'Components/Machine/Buttons/Button';
import StyledBottomControls from './StyledBottomControls.js';

const BottomControls = ({ handleDrawer }) => (
  <StyledBottomControls>
    <LinkButton
      className='button-soundscapes'
      text='Soundscapes'
      handleClick={handleDrawer}
    />
  </StyledBottomControls>
);

BottomControls.propTypes = {
  handleDrawer: PropTypes.func.isRequired,
};

export default BottomControls;
