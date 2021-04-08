import React from 'react';
import PropTypes from 'prop-types';
import { DottedIconDropdown, Chip } from '..';
import styles from './Film.module.scss';

export const Film = ({
  title,
  genres,
  year,
  imageSource,
  openDeleteMovie,
  openEditMovie,
  setFilmCard
}) => {
  let genresString;
  let yearToRender;

  if (genres) {
    genresString = genres.join(', ');
    yearToRender = year.split('-')[0];
  }

  return (
    <div className={styles.film}>
      <div className={styles.filmImageContainer}>
        <img
          src={imageSource}
          className={styles.filmImage}
          alt={`${title} poster`}
          onClick={setFilmCard}
        />
      </div>
      <div className={styles.filmDropdown}>
        <DottedIconDropdown openEditModal={openEditMovie} openDeleteModal={openDeleteMovie} />
      </div>
      <div className={styles.filmFooter}>
        <div>
          <div className={[styles.filmTitle, styles.filmText].join(' ')}>{title}</div>
          <div className={[styles.filmCategory, styles.filmText].join(' ')}>{genresString}</div>
        </div>
        <Chip year={yearToRender} />
      </div>
    </div>
  )
}

Film.propTypes = {
  title: PropTypes.string,
  genres: PropTypes.array,
  year: PropTypes.string,
  imageSource: PropTypes.string,
};
