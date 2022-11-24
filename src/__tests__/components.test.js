import { render } from '@testing-library/react';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import About from '../pages/About';
import Countries from '../pages/Countries';
import store from '../redux/configureStore';
import '@testing-library/jest-dom';

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
