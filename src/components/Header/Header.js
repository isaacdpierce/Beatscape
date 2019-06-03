import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className='App-header'>
      <h1 className='logo'>Beatscape</h1>
      <nav>
        <ul className='nav-links'>
          <li>About</li>
          <li>Instructions</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
