import React, { useCallback } from 'react';
import { Modal } from '..';
import styles from './DeleteMovieModal.module.scss';

export const DeleteMovieModal = ({ isOpen, toggleOpen }) => {
  const handleDeleteSubmit = useCallback(() => {
    toggleOpen(isOpen);
  }, [isOpen, toggleOpen]);

  const handleDeleteCancel = () => toggleOpen(isOpen);

  return (
    <>
      {isOpen && (
        <Modal
          title="DELETE MOVIE"
          secondButtonTitle="Confirm"
          onSubmit={handleDeleteSubmit}
          onCancel={handleDeleteCancel}
        >
          <p className={styles.deleteMovieModal}>
            Are you sure you want to delete this movie?
          </p>
        </Modal>
      )}
    </>
  );
};
