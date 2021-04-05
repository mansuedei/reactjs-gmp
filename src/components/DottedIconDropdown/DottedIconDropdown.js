import React, { useState } from 'react';
import { DottedIcon } from '../../assets/icons/DottedIcon';
import { DeleteMovieModal, EditMovieModal } from '..';
import styles from './DottedIconDropdown.module.scss';

export const DottedIconDropdown = () => {

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const showDropdown = () => setDropdownOpen(true);
  const hideDropdown = () => setDropdownOpen(false);

  const handleEditModal = () => {
    setEditModalOpen(true);
  };

  const handleDeleteModal = () => {
    setDeleteModalOpen(true);
  }

  const handleEditToggle = (isOpen) => {
    setEditModalOpen(!isOpen);
  };

  const handleDeleteToggle = (isOpen) => {
    setDeleteModalOpen(!isOpen);
  };

  return (
    <div className={styles.dottedIconDropdown}>
      <div onClick={showDropdown} className={styles.dottedIconDropdownIcon}>
        <DottedIcon />
      </div>
      {isDropdownOpen && (
        <div className={styles.dottedIconDropdownPopUp}>
          <button onClick={hideDropdown} className={styles.dottedIconDropdownCloseIcon}>X</button>
          <div onClick={handleEditModal} className={styles.dottedIconDropdownOption}>Edit</div>
          <div onClick={handleDeleteModal} className={styles.dottedIconDropdownOption}>Delete</div>
          <EditMovieModal isOpen={isEditModalOpen} toggleOpen={handleEditToggle} />
          <DeleteMovieModal isOpen={isDeleteModalOpen} toggleOpen={handleDeleteToggle} />
        </div>
      )
      }
    </div>
  )
}
