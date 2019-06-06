import React from 'react';
import Slider from './Slider';
import tracksList from '../../../context/tracksList';
import './Tracks.css';

const Tracks = () => {
  return (
    <section className='tracks'>
      {tracksList.map((track, i) => {
        const { type } = track;
        return <Slider key={i} type={type} />;
      })}
    </section>
  );
};

export default Tracks;
