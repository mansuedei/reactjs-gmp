import { currentMovieReducer } from "../currentMovieReducer";
import { GET_MOVIE_DETAILS, RESET_MOVIE_DETAILS } from '../../action-types';

describe('currentMovieReducer', () => {
  it('should handle actions of type GET_MOVIE_DETAILS', () => {
    const action = {
      type: GET_MOVIE_DETAILS,
      payload: 'currentMovie'
    }

    const newState = currentMovieReducer(null, action);

    expect(newState).toEqual('currentMovie');
  })

  it('should handle actions of type RESET_MOVIE_DETAILS', () => {
    const action = {
      type: RESET_MOVIE_DETAILS
    }

    const newState = currentMovieReducer(null, action);

    expect(newState).toEqual(null);
  })

  it('should handle actions of unknown type', () => {
    const newState = currentMovieReducer(null, { type: 'ASDFGH' });

    expect(newState).toEqual(null);
  })
})
