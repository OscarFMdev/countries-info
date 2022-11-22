import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './Countries/countriesSlice';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});

export default store;
