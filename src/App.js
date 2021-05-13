import React from 'react';
import { hot } from "react-hot-loader";
import MovieDetailsPage from "./pages/HomePage";
import { ErrorBoundary } from './hoc/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <MovieDetailsPage/>
    </ErrorBoundary>
  )
}

export default hot(module)(App);
