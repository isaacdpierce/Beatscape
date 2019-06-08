import React from 'react';
import { NavLink } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
  const links = ['contact', 'about', 'youtube', 'soundcloud'];
  return (
    <footer>
      <div className='copyright'>
        <div>
          <p>Sound design by Michael Jacques &copy;2019 </p>
        </div>
        <nav>
          <ul className='nav-links'>
            {links.map((link, i) => {
              return (
                <NavLink
                  key={i}
                  to={`/${link}`}
                  className='footer'
                  activeClassName='selected-link'
                >
                  {link}
                </NavLink>
              );
            })}
          </ul>
        </nav>
        <div>
          <p>Web app created by Isaac Pierce &copy;2019 </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
