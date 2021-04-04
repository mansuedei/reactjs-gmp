import React, { useReducer } from "react";
import { Modal, FormInput, FormDateInput } from '..';
import styles from './EditMovieModal.module.scss';

const ACTION_RESET = "ACTION_RESET";
const ACTION_UPDATE = "ACTION_UPDATE";
const FIRST_BUTTON_TITLE = "Reset";
const SECOND_BUTTON_TITLE = "Save";

const initialState = {
  id: "",
  title: "",
  releaseDate: "",
  URL: "",
  genre: "",
  overview: "",
  runtime: ""
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION_UPDATE:
      const { field, value } = action.payload;

      return {
        ...state,
        [field]: value,
      }

    case ACTION_RESET:
      return action.payload;

    default:
      break;
  }
}

export const EditMovieModal = ({ isOpen, toggleOpen }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { id, title, releaseDate, URL, genre, overview, runtime } = state;

  const handleChange = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTION_UPDATE, payload: {
        field: e.target.name,
        value: e.target.value,
      }
    });
  }

  const handleEditSubmit = () => {
    toggleOpen(isOpen);
  };

  const handleEditCancel = () => toggleOpen(isOpen);

  const handleEditReset = () => {
    dispatch({ type: ACTION_RESET, payload: initialState });
  };

  return (
    <>
      {isOpen && <Modal
        title="EDIT MOVIE"
        firstButtonTitle={FIRST_BUTTON_TITLE}
        secondButtonTitle={SECOND_BUTTON_TITLE}
        onSubmit={handleEditSubmit}
        onReset={handleEditReset}
        onCancel={handleEditCancel}
      >
        <form>
          <div className={styles.editMovieInput}>
            <FormInput name="id" value={id} onChange={handleChange} placeholder="Id" label="Movie id"></FormInput>
          </div>
          <div className={styles.editMovieInput}>
            <FormInput name="title" value={title} onChange={handleChange} placeholder="Title" label="Title"></FormInput>
          </div>
          <div className={styles.editMovieInput}>
            <FormDateInput name="releaseDate" value={releaseDate} onChange={handleChange} label="Release date"></FormDateInput>
          </div>
          <div className={styles.editMovieInput}>
            <FormInput name="URL" value={URL} onChange={handleChange} placeholder="Movie URL here" label="Movie URL"></FormInput>
          </div>
          <div className={styles.addMovieInput}>
            <FormInput name="genre" value={genre} onChange={handleChange} placeholder="Movie genre here" label="Genre">
            </FormInput>
          </div>
          <div className={styles.editMovieInput}>
            <FormInput name="overview" value={overview} onChange={handleChange} placeholder="Overview here" label="Overview"></FormInput>
          </div>
          <div className={styles.editMovieInput}>
            <FormInput name="runtime" value={runtime} onChange={handleChange} placeholder="Runtime here" label="Runtime"></FormInput>
          </div>

        </form>
      </Modal>}
    </>
  );
};
