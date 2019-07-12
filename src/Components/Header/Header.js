import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const links = ['home', 'about', 'guide', 'coming soon'];
  return (
    <header className='App-header'>
      <NavLink to='/'>
        <h1 className='logo'>Beatscape</h1>
      </NavLink>
      <nav aria-label='Main Navigation'>
        <ul className='nav-links'>
          {links.map((link, i) => (
            <li key={i}>
              <NavLink
                exact
                to={link === 'home' ? '/' : `/${link.split(' ').join('-')}`}
                activeClassName='selected-link'
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
