import {
  CHANGE_SORT
} from '../action-types';

const initialState = "release_date"

export const sortReducer = (state = initialState, action) => {

  switch (action.type) {
    case CHANGE_SORT:
      return action.payload;

    default:
      return state;
  }
};
