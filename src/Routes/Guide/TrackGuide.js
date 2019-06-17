import React from 'react';

import arrow from 'Assets/images/icon-arrow.png';

const TrackGuide = ({ tracks, id }) => {
  const { type, description } = tracks[id];
  return (
    <li>
      <img className='icon-arrow' src={arrow} alt='' />
      <strong>{`${type} - `}</strong>
      {description}
    </li>
  );
};

export default TrackGuide;
