import React, { useState } from "react";
import { DottedIcon } from '../../assets/icons/DottedIcon';
import { Modal, EditMovieModal } from '../../components';
import styles from './DottedIconDropdown.module.scss';

export const DottedIconDropdown = () => {

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const showDropdown = () => setDropdownOpen(true);
  const hideDropdown = () => setDropdownOpen(false);

  const openDeleteModal = () => {
    setDeleteModalOpen(true);
  }
  const handleDeleteSubmit = () => {
    setDeleteModalOpen(false);
  }
  const handleDeleteCancel = () => setDeleteModalOpen(false);

  const handleEditToggle = (isOpen) => {
    setEditModalOpen(!isOpen);
  };

  const handleEditModal = () => {
    setEditModalOpen(true);
  };

  return (
    <div className={styles.dottedIconDropdown}>
      <div onClick={showDropdown} className={styles.dottedIconDropdownIcon}>
        <DottedIcon />
      </div>
      {isDropdownOpen && <div className={styles.dottedIconDropdownPopUp}>
        <button onClick={hideDropdown} className={styles.dottedIconDropdownCloseIcon}>X</button>
        <div onClick={handleEditModal} className={styles.dottedIconDropdownOption}>Edit</div>
        <div onClick={openDeleteModal} className={styles.dottedIconDropdownOption}>Delete</div>
        <EditMovieModal isOpen={isEditModalOpen} toggleOpen={handleEditToggle} />
        {isDeleteModalOpen && <Modal
          title="DELETE MOVIE"
          secondButtonTitle="Confirm"
          onSubmit={handleDeleteSubmit}
          onCancel={handleDeleteCancel}
        >
          <p className={styles.dottedIconDropdownParagraph}>Are you sure you want to delete this movie?</p>
        </Modal>}
      </div>}
    </div>
  )
}
