import React from 'react';
import PropTypes from 'prop-types';

import StyledTextBlock from './StyledTextBlock.js';

const TextBlock = ({ children }) => (
  <StyledTextBlock>{children}</StyledTextBlock>
);

TextBlock.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default TextBlock;
