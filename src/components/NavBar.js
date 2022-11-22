import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';

const NavBar = () => (
  <>
    <section className={s.navFlex}>
      <p>
        <NavLink to="/">
          &lt; Go Back
        </NavLink>
      </p>
      <h1>Countries</h1>
      <p>Search</p>
    </section>
  </>
);

export default NavBar;
