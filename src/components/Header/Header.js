import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const links = ['about', 'instructions', 'login'];
  return (
    <header className='App-header'>
      <h1 className='logo'>Beatscape</h1>
      <nav>
        <ul className='nav-links'>
          {links.map((link, i) => {
            return (
              <NavLink key={i} to={`/${link}`} activeClassName='selected-link'>
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
