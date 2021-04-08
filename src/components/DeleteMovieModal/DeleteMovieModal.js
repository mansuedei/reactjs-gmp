import React, { useCallback } from 'react';
import { Button, Modal } from '..';
import { SECOND_BUTTON_TITLE } from './consts';
import styles from './DeleteMovieModal.module.scss';

export const DeleteMovieModal = ({ isOpen, handleDeleteCancel, handleDeleteSubmit }) => {
  return (
    <>
      {isOpen && (
        <Modal
          title="DELETE MOVIE"
          secondButtonTitle="Confirm"
          onCancel={handleDeleteCancel}
        >
          <p className={styles.deleteMovieModalParagraph}>
            Are you sure you want to delete this movie?
          </p>
          <div className={styles.deleteMovieModalFooter}>
            <div className={styles.deleteMovieModalButton}>
              <Button
                onClick={handleDeleteSubmit}
                title={SECOND_BUTTON_TITLE}
                color="red"
                size="big"
              />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
