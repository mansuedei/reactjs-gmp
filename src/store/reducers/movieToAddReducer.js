import {
  CLOSE_ADD_MOVIE_MODAL,
  OPEN_ADD_MOVIE_MODAL
} from '../action-types';

export const movieToAddReducer = (state = null, action) => {

  const BLANK_SLATE = {
    title: '',
    poster_path: '',
    overview: '',
    runtime: '',
    genres: '',
    release_date: undefined,
  };

  switch (action.type) {
    case OPEN_ADD_MOVIE_MODAL:
      return BLANK_SLATE;

    case CLOSE_ADD_MOVIE_MODAL:
      return null;

    default:
      return state;
  }
};
