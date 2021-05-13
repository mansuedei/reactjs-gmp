
import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormInput.module.scss';

export const FormInput = ({ id, label, placeholder, onChange, name, value }) => {
  return (
    <>
      {label && <label className={styles.formInputLabel}>{label}</label>}
      <input
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        className={styles.formInputText}
        placeholder={placeholder}>
      </input>
    </>
  )
}

FormInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
};
