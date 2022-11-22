import React from 'react';
import PropTypes from 'prop-types';

const CountryInfo = ({ name, pollution }) => (
  <>
    <p>
      Name:
      {' '}
      {name}
    </p>
    <p>
      Polution:
      {' '}
      {pollution}
    </p>
  </>
);

CountryInfo.propTypes = {
  name: PropTypes.string.isRequired,
  pollution: PropTypes.string.isRequired,

};
export default CountryInfo;
