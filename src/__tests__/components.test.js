import { render } from '@testing-library/react';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import About from '../pages/About';
import Countries from '../pages/Countries';
import store from '../redux/configureStore';
import '@testing-library/jest-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

describe('Testing About page', () => {
  it('Should match the snapshot', () => {
    const about = render(
      <StrictMode>
        <Router>
          <Provider store={store}>
            <About />
          </Provider>
        </Router>
      </StrictMode>,
    );
    expect(about).toMatchSnapshot();
  });
});

describe('Testing Countries', () => {
  it('Should match the snapshot', () => {
    const countries = render(
      <StrictMode>
        <Router>
          <Provider store={store}>
            <Countries />
          </Provider>
        </Router>
      </StrictMode>,
    );
    expect(countries).toMatchSnapshot();
  });
});

describe('Testing NavBar', () => {
  it('Should match the snapshot', () => {
    const navBar = render(
      <StrictMode>
        <Router>
          <Provider store={store}>
            <NavBar />
          </Provider>
        </Router>
      </StrictMode>,
    );
    expect(navBar).toMatchSnapshot();
  });
});

describe('Testing Footer', () => {
  it('Should match the snapshot', () => {
    const footer = render(
      <StrictMode>
        <Router>
          <Provider store={store}>
            <Footer />
          </Provider>
        </Router>
      </StrictMode>,
    );
    expect(footer).toMatchSnapshot();
  });
});

describe('Testing Hero', () => {
  it('Should match the snapshot', () => {
    const hero = render(
      <StrictMode>
        <Router>
          <Provider store={store}>
            <Hero />
          </Provider>
        </Router>
      </StrictMode>,
    );
    expect(hero).toMatchSnapshot();
  });
});
