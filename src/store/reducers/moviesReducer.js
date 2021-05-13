import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE, GET_MOVIES } from '../action-types';

export const moviesReducer = (movies = [], action) => {

  switch (action.type) {
    case ADD_MOVIE:
      return [...movies, action.payload];

    case DELETE_MOVIE:
      return movies.filter(movie => movie.id !== action.payload);

    case EDIT_MOVIE:
      return movies.map(movie => movie.id === action.payload.id ? action.payload : movie);

    case GET_MOVIES:
      return action.payload;

    default:
      return movies;
  }
};
