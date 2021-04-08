import React, { useState } from 'react';
import { DottedIcon } from '../../assets/icons/DottedIcon';
import styles from './DottedIconDropdown.module.scss';

export const DottedIconDropdown = ({ openEditModal, openDeleteModal }) => {

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const showDropdown = () => setDropdownOpen(true);
  const hideDropdown = () => setDropdownOpen(false);

  const handleEditModal = () => {
    openEditModal();
    hideDropdown();
  };

  const handleDeleteModal = () => {
    openDeleteModal();
    hideDropdown();
  }

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
        </div>
      )}
    </div>
  )
}
