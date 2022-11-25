import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Countries from './pages/Countries';
import CountryInfo from './pages/CountryInfo';
import NavBar from './components/NavBar';
import './App.module.css';
import Footer from './components/Footer';
import fetchCountries from './redux/Countries/fetchCountries';
import About from './pages/About';

const App = () => {
  const dispatch = useDispatch();
  dispatch(fetchCountries());
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={(
            <Countries />
        )}
        />
        <Route path="/country/:countryinfo" element={<CountryInfo />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>

  );
};

export default App;
