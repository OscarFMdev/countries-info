import React from 'react';
import { useSelector } from 'react-redux';
import Hero from '../components/Hero';
import s from './Countries.module.css';

const Countries = () => {
  const countries = useSelector((state) => state.countries.countries);
  const status = useSelector((state) => state.countries.status);
  const handleOnClick = (target) => {
    if (target.tagName === 'IMG') {
      const country = countries.find(({ flag }) => flag === target.getAttribute('src'));
      console.log(country.name);
    } else {
      const country = countries[target.getAttribute('id')];
      console.log(country.name);
    }
  };

  const showCountries = () => {
    if (status === 'loading') {
      return <div><p className="message">Loading. Please Wait.</p></div>;
    }

    if (status === 'failed') {
      return <div><p className="failMessage">Sorry, the Countries are not available right now. Try again later</p></div>;
    }
    return (
      <ul className={s.countriesGrid}>
        {
          countries.map((country, index) => (
            <li key={country.name} id={index} className={s.countryContainer} onClick={(e) => handleOnClick(e.target)} aria-hidden="true">
              <img id={index} key={country.name} src={country.flag} alt={`${country.name} flag`} height="100" width="150" />
              <p id={index} className={s.countryName}>{country.name}</p>
            </li>
          ))
        }
      </ul>
    );
  };

  return (
    <>
      <Hero />
      <section>
        <section className={s.countries}>
          {showCountries()}
        </section>
      </section>
    </>
  );
};

export default Countries;
