import React from 'react';
import { hot } from "react-hot-loader";
import { Header } from './components';
import { HomePage, MovieDetailsPage } from './pages'
import { ErrorBoundary } from './hoc/ErrorBoundary';

const App = () => {
    return(
        <ErrorBoundary>
            <Header />
            <MovieDetailsPage movieId="1" />
            <HomePage />
        </ErrorBoundary>
    )
}

export default hot(module)(App);
