import React from 'react';
import PropTypes from 'prop-types';

import './TextBlock.css';

const TextBlock = ({ children }) => (
  <section className='text-block'>{children}</section>
);

TextBlock.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default TextBlock;
