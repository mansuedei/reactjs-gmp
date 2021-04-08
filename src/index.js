import React from 'react';
import { render } from 'react-dom';
import './main.scss';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/index';

const rootElement = document.getElementById('root');

render(
    <React.StrictMode>
        <Provider store={store}>
        <App/>
        </Provider>
    </React.StrictMode>,
    rootElement
);
