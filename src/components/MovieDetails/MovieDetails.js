import React from "react";
import { SearchIcon } from '../../assets/icons/SearchIcon';
import { Rating, Logo } from '../../components';
import styles from './MovieDetails.module.scss';

export const MovieDetails = ({ movie }) => {
  const { title, rating, overview, image, year, duration, description } = movie
  debugger;

  return (
    <header className={styles.movieDetails}>
      <div className={styles.movieDetailsHeader}>
        <Logo />
        <SearchIcon />
      </div>
      <div className={styles.movieDetailsMain}>
        <div className={styles.movieDetailsImageContainer}>
          <img className={styles.movieDetailsImage} src={image}></img>
        </div>
        <div className={styles.movieDetailsInfo}>
          <div className={styles.movieDetailsTitleWrapper}>
            <h1 className={styles.movieDetailsTitle}>{title}</h1>
            <Rating rating={rating} />
          </div>
          <div className={styles.movieDetailsOverview}>{overview}</div>
          <div className={styles.movieDetailsTimeWrapper}>
            <div className={styles.movieDetailsTime}>{year}</div>
            <div className={styles.movieDetailsTime}>{duration}</div>
          </div>
          <p className={styles.movieDetailsDescription}>{description}</p>
        </div>
      </div>
    </header>
  )
}