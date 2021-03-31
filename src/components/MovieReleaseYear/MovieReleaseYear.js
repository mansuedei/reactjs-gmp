import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieReleaseYear.module.scss';

export const MovieReleaseYear = ({ year }) => {
  return (
    <div className={styles.movieReleaseYear}>{year}</div>
  )
}

MovieReleaseYear.propTypes = {
  year: PropTypes.string,
};
