import React from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon } from '../../assets/icons/SearchIcon';
import { Rating, Logo } from '..';
import styles from './HeaderMovieDetails.module.scss';
import { resetMovieDetails } from "../../store/actions";
import { connect } from "react-redux";

const HeaderMovieDetails = ({ movie, resetMovieDetails }) => {
  console.log(movie);
  const { title, vote_average = "8.0", overview, release_date, runtime, genres, poster_path } = movie;
  let yearToRender;

  if (genres) {
    yearToRender = release_date.split('-')[0];
  }

  return (
    <header className={styles.headerMovieDetails}>
      <Link to='/roster'>
        <div className={styles.headerMovieDetailsHeader}
             onClick={() => {
               resetMovieDetails(movie.id);
             }}
        >
          <Logo/>
          <SearchIcon/>
        </div>
      </Link>
      <div className={styles.headerMovieDetailsMain}>
        <div className={styles.headerMovieDetailsImageContainer}>
          <img
            className={styles.headerMovieDetailsImage}
            src={poster_path}
            alt={`${title} poster`}>
          </img>
        </div>
        <div className={styles.headerMovieDetailsInfo}>
          <div className={styles.headerMovieDetailsTitleWrapper}>
            <h1 className={styles.headerMovieDetailsTitle}>
              {title}
            </h1>
            <Rating rating={vote_average}/>
          </div>
          <div className={styles.headerMovieDetailsTimeWrapper}>
            <div className={styles.headerMovieDetailsTime}>
              {yearToRender}
            </div>
            <div className={styles.headerMovieDetailsTime}>
              {runtime}
            </div>
          </div>
          <p className={styles.headerMovieDetailsDescription}>
            {overview}
          </p>
        </div>
      </div>
    </header>
  );
}

const mapStateToProps = (state) => {
  return {
    currentMovie: state.currentMovie
  }
}

const mapDispatchToProps = {
  resetMovieDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMovieDetails);
