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
      <nav>
        <NavLink to="/">
          Countries
        </NavLink>
        <NavLink to="/about">
          About
        </NavLink>
      </nav>
    </section>
  </>

);

export default NavBar;
