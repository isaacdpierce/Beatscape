import React from 'react';
import { NavLink } from 'react-router-dom';
import StyledHeader from './StyledHeader.js';

const Header = () => {
  const links = ['home', 'about', 'guide', 'coming soon'];
  return (
    <StyledHeader>
      <NavLink to='/'>
        <h1 className='logo'>Beatscape</h1>
      </NavLink>
      <nav aria-label='Main Navigation'>
        <ul className='nav__links'>
          {links.map((link, i) => (
            <li key={i}>
              <NavLink
                exact
                to={link === 'home' ? '/' : `/${link.split(' ').join('-')}`}
                activeClassName='selected'
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
