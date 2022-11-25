import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import s from './NavBar.module.css';

const NavBar = () => (
  <>
    <section className={s.navFlex}>
      <p>
        <NavLink to="/">
          {' '}
          <FaArrowLeft className={s.vector} />
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
