import React from 'react';
import { NavLink } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
  const links = ['contact', 'about us', 'youtube', 'soundcloud'];
  return (
    <footer>
      <div className='copyright'>
        <p>Sound design by Michael Jacques &copy;2019 </p>

        <nav aria-label='Personal Links'>
          <ul className='nav-links'>
            {links.map((link, i) => (
              <li key={i}>
                <NavLink
                  to={`/${link}`}
                  className='footer'
                  activeClassName='selected-link'
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <p>Web app created by Isaac Pierce &copy;2019 </p>
      </div>
    </footer>
  );
};

export default Footer;
