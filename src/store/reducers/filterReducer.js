import {
  CHANGE_FILTER,
} from '../action-types';

const initialState = null

export const filterReducer = (state = initialState, action) => {

  switch (action.type) {

    case CHANGE_FILTER:
      return action.payload;

    default:
      return state;
  }
};
