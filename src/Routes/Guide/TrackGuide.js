import React from 'react';
import PropTypes from 'prop-types';

import arrow from 'Assets/images/icon-arrow.png';

const TrackGuide = ({ type, description }) => (
  <li>
    <img className='icon-arrow' src={arrow} alt='' />
    <span className='list-label'>{`${type} - `}</span>

    {description}
  </li>
);

TrackGuide.propTypes = {
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default TrackGuide;
