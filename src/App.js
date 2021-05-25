import React from 'react';
import { hot } from "react-hot-loader";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from './pages/MovieDetailsPage'
import ErrorPage from "./pages/ErrorPage";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ErrorBoundary } from './hoc/ErrorBoundary';

class DebugRouter extends BrowserRouter {
  constructor(props) {
    super(props);
    console.log('initial history is: ', JSON.stringify(this.history, null, 2))
    this.history.listen((location, action) => {
      console.log(
        `The current URL is ${location.pathname}${location.search}${location.hash}`
      )
      console.log(`The last navigation action was ${action}`, JSON.stringify(this.history, null, 2));
    });
  }
}

const App = () => {
  return (
    <ErrorBoundary>
      <DebugRouter>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route path="/films/:id" component={MovieDetailsPage}/>
          <Route path="*">
            <ErrorPage/>
          </Route>
        </Switch>
      </DebugRouter>
    </ErrorBoundary>
  )
}

export default hot(module)(App);
