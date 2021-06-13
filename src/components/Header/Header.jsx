import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { MENU, LOGO_URL } from '../../constants/values';
import './styles.scss';

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={LOGO_URL} className="header_logo" />
      </Link>
      <ul className="header_menu">
        {MENU.map(({ page, url }) => (
          <li className="header_link">
            <NavLink to={url} activeClassName="header_link__active">
              {page}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
