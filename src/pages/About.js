import React from 'react';
import {
  FaTwitterSquare, FaLinkedin, FaGithubSquare,
} from 'react-icons/fa';
import s from './About.module.css';

const About = () => (
  <>
    <section className={s.about}>
      <h2>
        About
      </h2>
      <p>
        This is a project created with React, Redux and
        {' '}
        <a href="https://restcountries.com/">REST countries API.</a>
      </p>
      <p>
        Do you want to learn about how the project works or you just want to say hi?
        Feel free to reach out on my social media:
      </p>
      <div className={s.iconsContainer}>
        <a href="https://twitter.com/OscarFMdev">
          <FaTwitterSquare />
        </a>
        <a href="https://www.linkedin.com/in/oscarfmdev/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/OscarFMdev">
          <FaGithubSquare />
        </a>
      </div>
    </section>
  </>
);

export default About;
