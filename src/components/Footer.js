import React from 'react';
import {
  FaTwitterSquare, FaLinkedin, FaGithubSquare,
} from 'react-icons/fa';
import s from './Footer.module.css';

const Footer = () => (
  <footer className={s.footer}>
    <p>
      Created by:
      {' '}
      <a href="https://www.linkedin.com/in/oscarfmdev/" className={s.footerLink}>@OscarFMdev</a>
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
  </footer>
);

export default Footer;
