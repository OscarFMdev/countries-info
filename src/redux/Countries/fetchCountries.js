import { createAsyncThunk } from '@reduxjs/toolkit';

const apiCountries = async () => {
  const url = 'https://restcountries.com/v2/all';
  const data = await fetch(url);
  const json = await data.json();
  return json;
};

const fetchCountries = createAsyncThunk(
  'dragons/fetchCountries',
  apiCountries,
);

export default fetchCountries;
