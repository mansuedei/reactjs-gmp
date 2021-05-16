import {
  GET_MOVIES,
  CHANGE_SORT,
  CHANGE_FILTER,
  GET_MOVIE_DETAILS,
  RESET_MOVIE_DETAILS,
  OPEN_ADD_MOVIE_MODAL,
  CLOSE_ADD_MOVIE_MODAL,
  ADD_MOVIE,
  DELETE_MOVIE,
  EDIT_MOVIE,
  OPEN_EDIT_MOVIE_MODAL,
  CLOSE_EDIT_MOVIE_MODAL,
  OPEN_DELETE_MOVIE_MODAL,
  CLOSE_DELETE_MOVIE_MODAL
} from '../action-types/';

import movies from '../../API/movies';

const SORT_ORDER = "desc";

export const changeFilter = (filter) => {
  return { type: CHANGE_FILTER, payload: filter }
};

export const changeSort = (sort) => {
  return { type: CHANGE_SORT, payload: sort }
};

export const getMovies = (sortBy, filter) => async dispatch => {
  const response = await movies.get('', { params: { sortBy, filter, sortOrder: SORT_ORDER } });

  dispatch({ type: GET_MOVIES, payload: response.data.data });
};

export const applyFilterGetMovies = (sort, filter) => dispatch => {
  dispatch(changeFilter(filter));
  dispatch(getMovies(sort, filter));
}

export const applySortGetMovies = (sort, filter) => dispatch => {
  dispatch(changeSort(sort));
  dispatch(getMovies(sort, filter));
}

export const applyMovieToAdd = (movie, sort, filter) => dispatch => {
  dispatch(addMovie(movie)).then(dispatch(getMovies(sort, filter))).finally(dispatch(closeAddMovieModal()));
}

export const applyMovieToEdit = (movie, sort, filter) => dispatch => {
  dispatch(editMovie(movie)).then(dispatch(getMovies(sort, filter))).finally(dispatch(closeEditMovieModal()));
}

export const applyMovieToDelete = (id, sort, filter) => dispatch => {
  dispatch(deleteMovie(id)).then(dispatch(getMovies(sort, filter))).finally(dispatch(closeDeleteMovieModal()));
}

export const getMovieDetails = (id) => async dispatch => {
  const response = await movies.get(`${id}`);

  dispatch({ type: GET_MOVIE_DETAILS, payload: response.data });
};

export const selectMovie = (id) => async dispatch => {
  const response = await movies.get(`${id}`);

  dispatch({ type: GET_MOVIE_DETAILS, payload: response.data });
};

export const resetMovieDetails = (id) => {
  return {
    type: RESET_MOVIE_DETAILS,
    payload: null
  }
};

export const addMovie = (movie) => async dispatch => {
  const { data } = await movies.post('', movie);

  dispatch({ type: ADD_MOVIE, payload: data });
};

export const deleteMovie = (id) => async dispatch => {
  await movies.delete(`${id}`);

  dispatch({ type: DELETE_MOVIE, payload: id });
};

export const editMovie = (movie) => async dispatch => {
  const { data } = await movies.put('', movie);

  dispatch({ type: EDIT_MOVIE, payload: data });
};

export const openAddMovieModal = () => dispatch => {
  dispatch({ type: OPEN_ADD_MOVIE_MODAL });
}

export const closeAddMovieModal = () => dispatch => {
  dispatch({ type: CLOSE_ADD_MOVIE_MODAL });
}

export const openEditMovieModal = (movie) => dispatch => {
  dispatch({ type: OPEN_EDIT_MOVIE_MODAL, payload: movie });
}

export const closeEditMovieModal = () => dispatch => {
  console.trace()
  dispatch({ type: CLOSE_EDIT_MOVIE_MODAL });
}

export const openDeleteMovieModal = (movie) => dispatch => {
  dispatch({ type: OPEN_DELETE_MOVIE_MODAL, payload: movie });
}

export const closeDeleteMovieModal = () => dispatch => {
  dispatch({ type: CLOSE_DELETE_MOVIE_MODAL });
}
