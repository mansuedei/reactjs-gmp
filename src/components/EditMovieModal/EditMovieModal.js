import React from 'react';
import { Modal } from '..';
import EditMovie from "../EditMovie";
import { closeEditMovieModal } from "../../store/actions";
import { connect } from "react-redux";

const EditMovieModal = ({ movieToEdit, closeEditMovieModal }) => {
  return (
    <>
      {movieToEdit && <Modal
        title='EDIT MOVIE'
        onCancel={closeEditMovieModal}
      >
        <EditMovie/>
      </Modal>}
    </>
  );
};

const mapStateToProps = (state) => {

  return {
    movieToEdit: state.movieToEdit
  }
}

const mapDispatchToProps = {
  closeEditMovieModal
};

export default connect(mapStateToProps, mapDispatchToProps)(EditMovieModal);
