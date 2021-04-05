import React, { useReducer, useCallback } from "react";
import { Modal, FormInput, FormDateInput } from '..';
import { FIRST_BUTTON_TITLE, SECOND_BUTTON_TITLE, ACTION_RESET, ACTION_UPDATE } from './consts';
import styles from './AddMovieModal.module.scss';

const initialState = {
  title: "",
  releaseDate: "",
  URL: "",
  overview: "",
  runtime: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_UPDATE:
      const { field, value } = action.payload;

      return {
        ...state,
        [field]: value,
      };

    case ACTION_RESET:
      return action.payload;

    default:
      break;
  }
};

export const AddMovieModal = ({ isOpen, toggleOpen }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { title, URL, overview, runtime, releaseDate } = state;

  const inputsData = [
    {
      id: 1,
      name: 'title',
      value: title,
      placeholder: 'Title',
      label: 'Title',
    },
    {
      id: 2,
      name: 'URL',
      value: URL,
      placeholder: 'Movie URL here',
      label: 'Movie URL',
    },
    {
      id: 3,
      name: 'overview',
      value: overview,
      placeholder: 'Overview here',
      label: 'Overview',
    },
    {
      id: 4,
      name: 'runtime',
      value: runtime,
      placeholder: 'Runtime here',
      label: 'Runtime',
    },
  ];

  const handleChange = (event) => {
    event.preventDefault();
    dispatch({
      type: ACTION_UPDATE,
      payload: {
        field: e.target.name,
        value: e.target.value,
      },
    });
  };

  const handleEditSubmit = useCallback(() => {
    toggleOpen(isOpen);
  }, [isOpen, state, toggleOpen]);

  const handleEditCancel = () => toggleOpen(isOpen);

  const handleEditReset = () => {
    dispatch({ type: ACTION_RESET, payload: initialState });
  };

  return (
    <>
      {isOpen && (
        <Modal
          title="Add MOVIE"
          firstButtonTitle={FIRST_BUTTON_TITLE}
          secondButtonTitle={SECOND_BUTTON_TITLE}
          onSubmit={handleEditSubmit}
          onReset={handleEditReset}
          onCancel={handleEditCancel}
        >
          <form>
            {inputsData.map((input) => (
              <div className={styles.addMovieInput}>
                <FormInput
                  key={input.id}
                  name={input.name}
                  value={input.value}
                  onChange={handleChange}
                  placeholder={input.placeholder}
                  label={input.label}
                />
              </div>
            ))}
            <div className={styles.addMovieInput}>
              <FormDateInput
                name="releaseDate"
                value={releaseDate}
                onChange={handleChange}
                label="Release date"
              />
            </div>
          </form>
        </Modal>
      )}
    </>
  );
};
