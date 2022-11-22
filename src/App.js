import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Countries from './components/Countries';
import CountryInfo from './components/CountryInfo';
import NavBar from './components/NavBar';
import './App.module.css';

const App = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Countries />} />
      <Route path="/" element={<CountryInfo />} />
    </Routes>
  </>
);

export default App;
