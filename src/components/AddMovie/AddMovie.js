import React, { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { FormInput, FormDateInput, Button } from '..';
import { ACTION_RESET, ACTION_UPDATE, FIRST_BUTTON_TITLE, SECOND_BUTTON_TITLE } from './consts';
import { setAddMovie, clearAddMovie, addMovie } from '../../store/actions/movies';
import styles from './AddMovie.module.scss';

export const AddMovie = ({ handleAddSubmit }) => {
  const dispatchRedux = useDispatch();

  const initialState = {
    title: '',
    poster_path: '',
    overview: '',
    runtime: '',
    genres: '',
    release_date: undefined,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case ACTION_UPDATE:
        const { field, value } = action.payload;
        let elementToUpdate = state[field];
        elementToUpdate = value;

        return {
          ...state,
          [field]: elementToUpdate,
        };

      case ACTION_RESET:
        return action.payload;

      default:
        break;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTION_UPDATE,
      payload: {
        field: e.target.name,
        value: e.target.value,
      },
    });
  };

  const handleAddReset = () => {
    dispatch({ type: ACTION_RESET, payload: initialState });
  };

  const handleAddSubmitForm = () => {
    const movieToAdd = {
      ...state,
      genres: state.genres.split(','),
      runtime: Number(state.runtime),
    };

    dispatchRedux(setAddMovie(movieToAdd));
    dispatchRedux(addMovie(movieToAdd));
    dispatchRedux(clearAddMovie(null));
    handleAddSubmit();
  };

  return (
    <>
      <div className={styles.addMovieInput}>
        <FormInput
          id="title"
          name="title"
          value={state.title}
          onChange={handleChange}
          placeholder="Title"
          label="Title"
        />
      </div>
      <div className={styles.addMovieInput}>
        <FormInput
          id="poster_path"
          name="poster_path"
          value={state.URL}
          onChange={handleChange}
          placeholder="Movie URL here"
          label="Movie URL"
        />
      </div>
      <div className={styles.addMovieInput}>
        <FormInput
          id="overview"
          name="overview"
          value={state.overview}
          onChange={handleChange}
          placeholder="TitlOverview heree"
          label="Overview"
        />
      </div>
      <div className={styles.addMovieInput}>
        <FormInput
          id="runtime"
          name="runtime"
          value={state.runtime}
          onChange={handleChange}
          placeholder="Run time here"
          label="Run time"
        />
      </div>
      <div className={styles.addMovieInput}>
        <FormInput
          id="genres"
          name="genres"
          value={state.genres}
          onChange={handleChange}
          placeholder="Genres"
          label="Genres"
        />
      </div>
      <div className={styles.addMovieInput}>
        <FormDateInput
          name="release_date"
          value={state.release_date}
          onChange={handleChange}
          label="Release date"
        />
      </div>
      <div className={styles.addMovieFooter}>
        <div className={styles.addMovieButton}>
          <Button onClick={handleAddReset} title={FIRST_BUTTON_TITLE} color="gray" size="big" />
        </div>
        <div className={styles.addMovieButton}>
          <Button
            onClick={handleAddSubmitForm}
            title={SECOND_BUTTON_TITLE}
            color="red"
            size="big"
          />
        </div>
      </div>
    </>
  );
};
