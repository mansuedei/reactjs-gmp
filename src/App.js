import React from 'react';
import { hot } from "react-hot-loader";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import { Switch, Route } from 'react-router-dom';
import { ErrorBoundary } from './hoc/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route path="*">
          <ErrorPage/>
        </Route>
      </Switch>
    </ErrorBoundary>
  )
}

export default hot(module)(App);
