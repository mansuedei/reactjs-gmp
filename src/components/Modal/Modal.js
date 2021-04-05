import React from 'react';
import PropTypes from 'prop-types';
import { Button, Portal } from '../../components/';
import styles from './Modal.module.scss';

export const Modal = ({
  title,
  onCancel,
  onReset,
  onSubmit,
  children,
  firstButtonTitle,
  secondButtonTitle
}) => (
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
        <div className={styles.modalFooter}>
          <div className={styles.modalButton}>
            {firstButtonTitle && <Button onClick={onReset} title={firstButtonTitle} color="gray" size="big" />}
          </div>
          <div className={styles.modalButton}>
            <Button onClick={onSubmit} title={secondButtonTitle} color="red" size="big" />
          </div>
        </div>
      </div>
    </div>
  </Portal>
);

Modal.propTypes = {
  title: PropTypes.string,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
  firstButtonTitle: PropTypes.string,
  secondButtonTitle: PropTypes.string,
};

Modal.defaultProps = {
  title: '',
  onCancel: () => {},
  onSubmit: () => {},
  children: null,
};
