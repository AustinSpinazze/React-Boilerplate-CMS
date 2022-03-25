import React from 'react';

import { NAVBAR_LINKS } from '../../../utilities/constants';
import './_navbar.scss';
import logo from '../../../images/NavLogo.png';

const Navbar = props => {
  const { home, about, products, contact } = NAVBAR_LINKS;
  return (
    <header className="nav-container">
      <nav className="navbar">
        <img className="logo" alt="Outer Rim Supply Co. Logo" src={logo} />
        <ul>
          <li>
            <a href={home.link}>{home.name}</a>
          </li>
          <li>
            <a href={about.link}>{about.name}</a>
          </li>
          <li>
            <a href={products.link}>{products.name}</a>
          </li>
          <li>
            <a href={contact.link}>{contact.name}</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
