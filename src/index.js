import React from 'react';
import { render } from 'react-dom';
import './main.scss';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './store/index';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App/>
      </Router>
    </Provider>
  </React.StrictMode>,
  rootElement
);
