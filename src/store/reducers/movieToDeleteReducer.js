import {
  CLOSE_DELETE_MOVIE_MODAL,
  OPEN_DELETE_MOVIE_MODAL
} from '../action-types';

export const movieToDeleteReducer = (state = null, action) => {

  switch (action.type) {
    case OPEN_DELETE_MOVIE_MODAL:
      return action.payload;

    case CLOSE_DELETE_MOVIE_MODAL:
      return null;

    default:
      return state;
  }
};

