import React, { useContext } from 'react';
import MachineContext from 'Context/MachineContext';

const Drawer = ({ drawerStyle }) => {
  const { setUrl } = useContext(MachineContext);
  return (
    <>
      <section className='drawer' style={drawerStyle}>
        <div className='drawer-col'>
          <button
            type='submit'
            onClick={() => setUrl(`http://localhost:8000/api/soundscapes/1`)}
          >
            New York Hustle
          </button>
          <button>Tokyo Rain</button>
          <button>Dusty Road</button>
        </div>
        <div className='drawer-col'>
          <button
            type='submit'
            onClick={() => setUrl(`http://localhost:8000/api/soundscapes/2`)}
          >
            Secret Forest
          </button>
          <button>Sunset Saunter</button>
          <button>Beach Bounce</button>
        </div>
      </section>
    </>
  );
};

export default Drawer;
