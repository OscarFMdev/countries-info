import React from 'react';
import s from './Hero.module.css';

const Hero = () => (
  <section className={s.hero}>
    <h2 className={s.heroTitle}>
      Welcome to Countries
    </h2>
    <p>
      Search the country and click on the flag to learn more about this country.
    </p>
  </section>
);

export default Hero;
