import React from "react";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import ErrorPage from "./pages/ErrorPage";

export default [
  {
    ...HomePage,
    path: "/",
    exact: true
  },
  {
    ...MovieDetailsPage,
    path: "/films/:id"
  },
  {
    component: ErrorPage,
    path: "*"
  }
];
