import React from 'react';
import { NavLink } from 'react-router-dom';

import StyledFooter from './StyledFooter.js';

const Footer = () => (
  // const links = ['contact', 'about us', 'youtube', 'soundcloud'];
  <StyledFooter>
    <div className='copyright'>
      <p>Sound design by Michael Jacques &copy;2019 </p>

      {/* <nav aria-label='Personal Links'>
          <ul className='nav__links'>
            {links.map((link, i) => (
              <li key={i}>
                <NavLink
                  to={`/${link}`}
                  className='footer'
                  activeClassName='selected'
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav> */}

      <p>Web app created by Isaac Pierce &copy;2019 </p>
    </div>
  </StyledFooter>
);
export default Footer;
