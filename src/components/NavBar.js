import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';

const logo = require('../assets/world-logo.png');

const NavBar = () => (
  <>
    <section className={s.navFlex}>
      <p>
        <NavLink to="/">
          <img src={logo} alt="logo" height="45" width="45" className={s.logo} />
        </NavLink>
      </p>
      <input placeholder="Search countries" className={s.search} />
      <nav>
        <NavLink to="/">
          Countries
        </NavLink>
        <NavLink to="country">
          About
        </NavLink>
      </nav>
    </section>
  </>
);

export default NavBar;
