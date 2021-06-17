import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Chip } from '..';
import DottedIconDropdown from '../DottedIconDropdown';
import styles from './Film.module.scss';
import { connect } from "react-redux";
import { getMovieDetails } from "../../store/actions";

const Film = ({
                id,
                title,
                genres,
                year,
                imageSource,
                movieToDelete,
                movieToEdit,
                getMovieDetails
              }) => {
  let genresString;
  let yearToRender;

  if (genres) {
    genresString = genres.join(', ');
    yearToRender = year.split('-')[0];
  }

  return (
    <div
      className={styles.film}
    >
      <div className={styles.filmImageContainer}>
        <Link to={'/films/' + id}>
          <img
            src={imageSource}
            className={styles.filmImage}
            alt={`${title} poster`}

          />
        </Link>
      </div>
      <div className={styles.filmDropdown}>
        <DottedIconDropdown id={id} openEditModal={movieToEdit} openDeleteModal={movieToDelete}/>
      </div>
      <div className={styles.filmFooter}>
        <div>
          <div className={[styles.filmTitle, styles.filmText].join(' ')}>{title}</div>
          <div className={[styles.filmCategory, styles.filmText].join(' ')}>{genresString}</div>
        </div>
        <Chip year={yearToRender}/>
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

const mapStateToProps = (state) => {
  return {
    movieToDelete: state.movieToDelete,
    movieToEdit: state.movieToEdit
  }
}

const mapDispatchToProps = {
  getMovieDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(Film);
