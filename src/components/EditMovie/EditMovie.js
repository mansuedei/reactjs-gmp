import React, { useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormInput, FormDateInput, Button } from '..';
import { ACTION_RESET, ACTION_UPDATE, FIRST_BUTTON_TITLE, SECOND_BUTTON_TITLE } from './consts';
import { clearEditMovie, setEditMovie, editMovie } from '../../store/actions/movies';
import styles from './EditMovie.module.scss';

export const EditMovie = ({ handleEditSubmit }) => {
  const movieToEdit = useSelector((state) => state.moviesData.editMovie);
  const { id, title, runtime, overview, poster_path, release_date, genres } = movieToEdit;

  const initialState = {
    id: id,
    title,
    poster_path,
    runtime,
    overview,
    release_date,
    genres,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case ACTION_UPDATE:
        let { field, value } = action.payload;
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
  const dispatchRedux = useDispatch();

  const handleChange = (e) => {
    console.log(state);
    e.preventDefault();
    dispatch({
      type: ACTION_UPDATE,
      payload: {
        field: e.target.name,
        value: e.target.value,
      },
    });
  };

  const handleEditReset = () => {
    dispatch({ type: ACTION_RESET, payload: initialState });
  };

  const handleEditSubmitForm = () => {
    const movieEdit = {
      ...state,
      runtime: Number(state.runtime),
    };
    dispatchRedux(setEditMovie(movieEdit));
    dispatchRedux(editMovie(movieEdit));
    dispatchRedux(clearEditMovie());
    handleEditSubmit();
  };
  return (
    <>
      <div className={styles.editMovieInput}>
        <FormInput
          id="id-edit"
          name="id"
          value={state.id}
          onChange={handleChange}
          placeholder="Id"
          label="Id"
        />
      </div>
      <div className={styles.editMovieInput}>
        <FormInput
          id="title-edit"
          name="title"
          value={state.title}
          onChange={handleChange}
          placeholder="Title"
          label="Title"
        />
      </div>
      <div className={styles.editMovieInput}>
        <FormInput
          id="poster_path-edit"
          name="poster_path"
          value={state.poster_path}
          onChange={handleChange}
          placeholder="Movie URL here"
          label="Movie URL"
        />
      </div>
      <div className={styles.editMovieInput}>
        <FormInput
          id="overview-edit"
          name="overview"
          value={state.overview}
          onChange={handleChange}
          placeholder="TitlOverview heree"
          label="Overview"
        />
      </div>
      <div className={styles.editMovieInput}>
        <FormInput
          id="runtime-edit"
          name="runtime"
          value={state.runtime}
          onChange={handleChange}
          placeholder="Run time here"
          label="Run time"
        />
      </div>
      <div className={styles.editMovieInput}>
        <FormInput
          id="genres-edit"
          name="genres"
          value={state.genres}
          onChange={handleChange}
          placeholder="Genres"
          label="Genres"
        />
      </div>
      <div className={styles.editMovieInput}>
        <FormDateInput
          name="release_date"
          value={state.release_date}
          onChange={handleChange}
          label="Release date"
        />
      </div>
      <div className={styles.editMovieFoter}>
        <div className={styles.editMovieButton}>
          <Button onClick={handleEditReset} title={FIRST_BUTTON_TITLE} color="gray" size="big" />
        </div>
        <div className={styles.editMovieButton}>
          <Button
            onClick={handleEditSubmitForm}
            title={SECOND_BUTTON_TITLE}
            color="red"
            size="big"
          />
        </div>
      </div>
    </>
  );
};
