import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormDateInput.module.scss';

export const FormDateInput = ({ placeholder, name }) => {
  return (
    <input
      name={name}
      type='text'
      onFocus={(e) => e.target.type = 'date'}
      onBlur={(e) => e.target.type = 'text'}
      placeholder={placeholder}
      className={styles.formDateInputDate}>
    </input>
  )
}

FormDateInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
};
