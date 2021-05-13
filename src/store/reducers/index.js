import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';
import { currentMovieReducer } from "./currentMovieReducer";
import { filterReducer } from './filterReducer';
import { sortReducer } from './sortReducer';
import { movieToAddReducer } from "./movieToAddReducer";
import { movieToDeleteReducer } from "./movieToDeleteReducer";
import { movieToEditReducer } from "./movieToEditReducer";

export default combineReducers({
  movies: moviesReducer,
  currentMovie: currentMovieReducer,
  filter: filterReducer,
  sort: sortReducer,
  movieToAdd: movieToAddReducer,
  movieToDelete: movieToDeleteReducer,
  movieToEdit: movieToEditReducer
});
