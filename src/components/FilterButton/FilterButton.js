import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterButton.module.scss';

export const FilterButton = ({ title }) => {
  return (
    <button className={styles.filterButton}>{title}</button>
  )
}

FilterButton.propTypes = {
  title: PropTypes.string,
};
