import React from 'react';

const Drawer = ({ drawerStyle }) => {
  return (
    <>
      <section className='drawer' style={drawerStyle}>
        <div>
          <h3>Tokyo Rain</h3>
          <h3>New York Hustle</h3>
          <h3>Dusty Road</h3>
        </div>
        <div>
          <h3>Secret Forest</h3>
          <h3>Sunset Saunter</h3>
          <h3>Beach Bounce</h3>
        </div>
      </section>
    </>
  );
};

export default Drawer;
