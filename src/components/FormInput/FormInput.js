
import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormInput.module.scss';

export const FormInput = ({label, placeholder, onChange, name, value }) => {
  return (
    <>
      {label && <label className={styles.formInputLabel}>{label}</label>}
      <input
        name={name}
        onChange={(event) => onChange(event)}
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
