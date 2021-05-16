import {
  CLOSE_EDIT_MOVIE_MODAL,
  OPEN_EDIT_MOVIE_MODAL
} from '../action-types';

export const movieToEditReducer = (state = null, action) => {

  switch (action.type) {
    case OPEN_EDIT_MOVIE_MODAL:
      return action.payload;

    case CLOSE_EDIT_MOVIE_MODAL:
      return null;

    default:
      return state;
  }
};
