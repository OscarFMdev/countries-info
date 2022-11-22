/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import fetchCountries from './fetchCountries';

const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    countries: [],
    status: 'idle',
  },

  extraReducers: {
    [fetchCountries.fulfilled]: (state, action) => {
      state.countries = action.payload.map((country) => ({
        id: country.name,
        name: country.name,
        flag: country.flag,
      }));
    },
    [fetchCountries.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default countriesSlice.reducer;
