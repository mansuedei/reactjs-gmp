import React from "react";
import { Modal } from '..';

export const AddMovieModal = ({ isOpen, handleAddSubmit, handleAddCancel }) => {
  return (
    <>
      {isOpen && (
        <Modal
          title="Add MOVIE"
          onCancel={handleAddCancel}>
          <AddMovie handleAddSubmit={handleAddSubmit}></AddMovie>
        </Modal>
      )}
    </>
  );
};
