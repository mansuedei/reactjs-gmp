import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterButton.module.scss';

export const FilterButton = ({ title, onFilterClick }) => {
  return (
    <button className={styles.filterButton}
      onClick={onFilterClick}>
      {title}
    </button>
  )
}

FilterButton.propTypes = {
  title: PropTypes.string,
  onFilterClick: PropTypes.func
};
