import {
  GET_MOVIE_DETAILS,
  RESET_MOVIE_DETAILS,
} from '../action-types';

export const currentMovieReducer = (state = null, action) => {

  switch (action.type) {
    case GET_MOVIE_DETAILS:
      return action.payload;

    case RESET_MOVIE_DETAILS:
      return action.payload;

    default:
      return state;
  }
};
