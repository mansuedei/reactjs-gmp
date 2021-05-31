import React from 'react';
import { render } from 'react-dom';
import './main.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import Root from './Root';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <Root>
      <Router>
        <App/>
      </Router>
    </Root>
  </React.StrictMode>,
  rootElement
);
