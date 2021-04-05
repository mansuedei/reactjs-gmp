import React from 'react';
import PropTypes from 'prop-types';
import styles from './Chip.module.scss';

export const Chip = ({ year }) => {
  return (
    <div className={styles.chip}>{year}</div>
  )
}

Chip.propTypes = {
  year: PropTypes.string,
};
