import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const links = ['home', 'about', 'guide', 'signup', 'login'];
  return (
    <header className='App-header'>
      <NavLink to='/'>
        <h1 className='logo'>Beatscape</h1>
      </NavLink>
      <nav>
        <ul className='nav-links'>
          {links.map((link, i) => {
            return (
              <NavLink
                exact
                key={i}
                to={link === 'home' ? '/' : '/' + link}
                activeClassName='selected-link'
              >
                {link}
              </NavLink>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;