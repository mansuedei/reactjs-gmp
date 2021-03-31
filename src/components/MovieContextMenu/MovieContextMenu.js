import React from "react";
import { DottedIcon } from '../../assets/icons/Dotted-Icon';
import styles from './MovieContextMenu.module.scss';

export const MovieContextMenu = () => {
  return (
    <div className={styles.movieContextMenu}>
      <div className={styles.movieContextMenuIcon}>
        <DottedIcon />
      </div>
      <div className={`${styles.movieContextMenuPopUp} ${styles.movieContextMenuPopUpHidden}`}>
        <div className={styles.movieContextMenuCloseIcon}>X</div>
        <div className={styles.movieContextMenuOption}>Edit</div>
        <div className={styles.movieContextMenuOption}>Delete</div>
      </div>
    </div>
  );
};
