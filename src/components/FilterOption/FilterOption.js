import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterOption.module.scss'

export const FilterOption = ({ title }) => {
  return (
    <button className={styles.filterOption}>{title}</button>
  )
}

FilterOption.propTypes = {
  title: PropTypes.string,
};
