import React from "react";
import { Modal } from '..';
import AddMovie from '../AddMovie';
import { closeAddMovieModal } from "../../store/actions";
import { connect } from "react-redux";

const AddMovieModal = ({ movieToAdd, closeAddMovieModal }) => {
  return (
    <>
      {movieToAdd && (
        <Modal
          title="Add movie"
          onCancel={closeAddMovieModal}>
          <AddMovie/>
        </Modal>
      )}
    </>
  );
};

const mapStateToProps = (state) => {

  return {
    movieToAdd: state.movieToAdd
  }
}

const mapDispatchToProps = {
  closeAddMovieModal
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMovieModal);
