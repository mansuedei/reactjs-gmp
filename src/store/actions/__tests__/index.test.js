import { getMovieDetails, resetMovieDetails } from "../index";
import { GET_MOVIE_DETAILS, RESET_MOVIE_DETAILS } from '../../action-types';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('getMovieDetails', () => {
  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares);

  it('should dispatch the action of the correct type', () => {
    const store = mockStore({});

    return store.dispatch(getMovieDetails('447365')).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(GET_MOVIE_DETAILS);
    })
  })
})

describe('resetMovieDetails', () => {
  it('has the correct type', () => {
    const action = resetMovieDetails();
    expect(action.type).toEqual(RESET_MOVIE_DETAILS);
  })
})
