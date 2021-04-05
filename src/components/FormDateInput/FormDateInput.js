import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormDateInput.module.scss';

export const FormDateInput = ({ label, name, onChange, value }) => {
  return (
    <>
      {label && <label className={styles.formDateInputLabel}>{label}</label>}
      <input
        name={name}
        type='date'
        value={value}
        onChange={(event) => onChange(event)}
        className={styles.formDateInputDate}>
      </input>
    </>
  )
}

FormDateInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
};
