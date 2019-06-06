import React from 'react';
import Track from './Track';
import tracksList from '../../../context/tracksList';
import './Tracks.css';
// import { clearInterval } from 'timers';

const Tracks = ({ isAnimated }) => {
  return (
    <section className='tracks'>
      {tracksList.map((track, i) => {
        const { type } = track;
        return <Track key={i} type={type} />;
      })}
    </section>
  );
};

export default Tracks;
