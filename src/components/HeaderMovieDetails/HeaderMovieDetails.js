import React from 'react';
import { SearchIcon } from '../../assets/icons/SearchIcon';
import { Rating, Logo } from '..';
import styles from './HeaderMovieDetails.module.scss';

export const HeaderMovieDetails = ({ movie }) => {
  const { title, rating, overview, image, year, duration, description } = movie;

  return (
    <header className={styles.headerMovieDetails}>
      <div className={styles.headerMovieDetailsHeader}>
        <Logo />
        <SearchIcon />
      </div>
      <div className={styles.headerMovieDetailsMain}>
        <div className={styles.headerMovieDetailsImageContainer}>
          <img className={styles.headerMovieDetailsImage} src={image}></img>
        </div>
        <div className={styles.headerMovieDetailsInfo}>
          <div className={styles.headerMovieDetailsTitleWrapper}>
            <h1 className={styles.headerMovieDetailsTitle}>
              {title}
            </h1>
            <Rating rating={rating} />
          </div>
          <div className={styles.headerMovieDetailsOverview}>
            {overview}
          </div>
          <div className={styles.headerMovieDetailsTimeWrapper}>
            <div className={styles.headerMovieDetailsTime}>
              {year}
            </div>
            <div className={styles.headerMovieDetailsTime}>
              {duration}
            </div>
          </div>
          <p className={styles.headerMovieDetailsDescription}>
            {description}
          </p>
        </div>
      </div>
    </header>
  );
};
