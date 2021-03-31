import React from 'react';
import PropTypes from 'prop-types';
import { MovieContextMenu, MovieReleaseYear } from '../../components';
import styles from './MovieCard.module.scss'

export const MovieCard = ({image, title, category, year}) => {
  return (
    <div className={styles.movieCard}>
      <div className={styles.movieCardImageContainer}>
        <img className={styles.movieCardImage} src={image}></img>
      </div>
      <div className={styles.movieCardContextMenu}>
        <MovieContextMenu />
      </div>
      <div className={styles.movieCardDescription}>
        <div>
          <div className={`${styles.movieCardTitle} ${styles.movieCardText}`}>{title}</div>
          <div className={`${styles.movieCardCategory} ${styles.movieCardText}`}>{category}</div>
        </div>
        <MovieReleaseYear year={year} />
      </div>
    </div>
  )
}

MovieCard.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
  year: PropTypes.string
};
