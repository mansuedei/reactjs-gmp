import React from 'react';
import { Button, Modal } from '..';
import { SECOND_BUTTON_TITLE } from './consts';
import styles from './DeleteMovieModal.module.scss';
import { closeDeleteMovieModal, applyMovieToDelete } from "../../store/actions";
import { connect } from "react-redux";

const DeleteMovieModal = ({ movieToDelete, closeDeleteMovieModal, applyMovieToDelete, sort, filter }) => {

  const handleSubmit = (e) => {
    e.preventDefault();

    applyMovieToDelete(movieToDelete.id, sort, filter)
  }
  return (
    <>
      {movieToDelete && (
        <Modal
          title="DELETE MOVIE"
          secondButtonTitle="Confirm"
          onCancel={closeDeleteMovieModal}
        >
          <form onSubmit={handleSubmit}>
            <p className={styles.deleteMovieModalParagraph}>
              Are you sure you want to delete this movie?
            </p>
            <div className={styles.deleteMovieModalFooter}>
              <div className={styles.deleteMovieModalButton}>
                <Button
                  type="submit"
                  title={SECOND_BUTTON_TITLE}
                  color="red"
                  size="big"
                />
              </div>
            </div>
          </form>
        </Modal>
      )}
    </>
  );
};

const mapStateToProps = (state) => {

  return {
    movieToDelete: state.movieToDelete,
    sort: state.sort,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  closeDeleteMovieModal,
  applyMovieToDelete
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteMovieModal);
