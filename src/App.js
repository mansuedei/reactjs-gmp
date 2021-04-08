import React from 'react';
import { hot } from "react-hot-loader";
import { HomePage } from './pages'
import { ErrorBoundary } from './hoc/ErrorBoundary';

const App = () => {
    return(
        <ErrorBoundary>
            <HomePage />
        </ErrorBoundary>
    )
}

export default hot(module)(App);
