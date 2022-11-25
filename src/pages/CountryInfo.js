import React from 'react';
import { useLocation } from 'react-router-dom';
import s from './CountryInfo.module.css';

const CountryInfo = () => {
  const country = useLocation().state;
  const {
    capital, region, population, borders, nativeName, flag,
  } = country;
  const countryName = country.name;
  return (
    <>
      <section className={s.infoContainer}>
        <img src={flag} alt="country flag" height="200" width="300" className={s.flag} />
        <ul className={s.infoList}>
          <li>
            <p>
              Name:
            </p>
            {' '}
            <span>
              {countryName || 'No name data'}

            </span>
          </li>
          <li>
            <p>

              Capital:
            </p>
            {' '}
            <span>
              {capital || 'No capital data'}

            </span>
          </li>
          <li>
            <p>

              Region:
            </p>
            {' '}
            <span>
              {region || 'No region data'}

            </span>
          </li>
          <li>
            <p>

              Population:
            </p>
            {' '}
            <span>
              {population || 'No population data'}

            </span>
          </li>
          <li>
            <p>

              Borders:
            </p>
            {' '}
            <span>
              {!borders
                ? 'No borders'
                : borders.map((border) => `${border}\n`)}

            </span>
          </li>
          <li>
            <p>

              Native Name:
            </p>
            {' '}
            <span>
              {nativeName || 'No native name data'}

            </span>
          </li>
        </ul>
      </section>
    </>
  );
};

export default CountryInfo;
