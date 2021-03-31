import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss'

export const Button = ({ title, color, textColor }) => {
  
  return (
    <button className={`${styles.button} ${styles[color]} ${styles[textColor]}`}>{title}</button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  textColor: PropTypes.string
};
