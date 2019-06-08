import React, { useContext } from 'react';
import Slider from './Slider';
import './Tracks.css';
import MachineContext from '../../../context/MachineContext';

const Tracks = () => {
  const { STORE } = useContext(MachineContext);
  const { tracks } = STORE;

  return (
    <section className='tracks'>
      {tracks.map((track, i) => {
        const { type } = track;
        return <Slider key={i} type={type} />;
      })}
    </section>
  );
};

export default Tracks;
