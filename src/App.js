import React from 'react';
import { hot } from "react-hot-loader";
import { HomePage, MovieDetailsPage } from './pages'
import { ErrorBoundary } from './hoc/ErrorBoundary';

const App = () => {
    return(
        <ErrorBoundary>
            <HomePage />
            <MovieDetailsPage movieId="1" />
        </ErrorBoundary>
    )
}

export default hot(module)(App);
