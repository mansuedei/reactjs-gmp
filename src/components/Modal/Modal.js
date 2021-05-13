import React from 'react';
import PropTypes from 'prop-types';
import { Portal } from '../Portal';
import styles from './Modal.module.scss';

export const Modal = ({ title, onCancel, children }) => (
  <Portal>
    <div className={styles.modalOverlay}>
      <div className={styles.modalWindow}>
        <div className={styles.modalHeader}>
          <button className={styles.modalIcon} onClick={onCancel}>X</button>
          <h1 className={styles.modalTitle}>{title}</h1>
        </div>
        <div className={styles.modalBody}>
          {children}
        </div>
      </div>
    </div>
  </Portal>
);

Modal.propTypes = {
  title: PropTypes.string,
  onCancel: PropTypes.func,
  children: PropTypes.node
};

Modal.defaultProps = {
  title: '',
  onCancel: () => {},
  children: null
};
