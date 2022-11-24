import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Hero from '../components/Hero';
import s from './Countries.module.css';
// import CountryInfo from './CountryInfo';

const Countries = ({ func }) => {
  const [search, setSearch] = useState('');
  const countries = useSelector((state) => state.countries.countries);
  const status = useSelector((state) => state.countries.status);
  // const handleOnClick = (target) => {
  //   if (target.tagName === 'IMG') {
  //     const country = countries.find(({ flag }) => flag === target.getAttribute('src'));
  //     console.log(country.name);
  //     console.log(country.name);
  //   }
  //   const country = countries[target.getAttribute('id')];
  //   console.log(country.name);
  //   return (
  //     <CountryInfo />
  //   );
  // };

  const handleOnClick = (target) => {
    if (target.tagName === 'IMG') {
      const country = countries.find(({ flag }) => flag === target.getAttribute('src'));
      func(country);
    }
    const country = countries[target.getAttribute('id')];
    func(country);
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
          // eslint-disable-next-line consistent-return, array-callback-return
          countries.filter((val) => {
            if (search === '') {
              return val;
            } if (val.name.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          }).map((country, index) => (
            <NavLink
              key={country.name}
              to={{
                pathname: '/country/countryinfo',
                search: country.name,
              }}
              state={country}
            >
              <li id={index} className={s.countryContainer} onClick={(e) => handleOnClick(e.target)} aria-hidden="true">
                <img
                  id={index}
                  key={country.name}
                  src={country.flag}
                  alt={`${country.name} flag`}
                  height="100"
                  width="150"
                />
                <p id={index} className={s.countryName}>{country.name}</p>
              </li>
            </NavLink>
          ))
        }
      </ul>
    );
  };

  return (
    <main>
      <Hero />
      <input type="text" placeholder="Search countries" className={s.search} onChange={(e) => setSearch(e.target.value)} />
      <section>
        <section className={s.countries}>
          {showCountries()}
        </section>
      </section>
    </main>
  );
};

Countries.propTypes = {
  func: PropTypes.func.isRequired,
};
export default Countries;
