import React from 'react';
import { render } from 'react-dom';
import './main.scss';

import App from './App';

const rootElement = document.getElementById('root');

render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    rootElement
);
