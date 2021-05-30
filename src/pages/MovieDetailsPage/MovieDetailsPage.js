import React, { Component } from "react";
import { compose } from "redux";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import styles from './MovieDetailsPage.module.scss';
import {
  Footer
} from '../../components/';

import Film from '../../components/Film';
import FilterBar from '../../components/FilterBar';
import HeaderMovieDetails from '../../components/HeaderMovieDetails';
import AddMovieModal from '../../components/AddMovieModal';
import DeleteMovieModal from "../../components/DeleteMovieModal";
import EditMovieModal from '../../components/EditMovieModal';

import {
  getMovies,
  getMovieDetails
} from '../../store/actions';

class MovieDetailsPage extends Component {

  componentDidMount() {
    const { getMovieDetails, getMovies, sort, filter } = this.props;

    getMovieDetails(this.props.match.params.id);
    getMovies(sort, filter);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { getMovieDetails } = this.props;

    if (prevProps.match.params.id !== this.props.match.params.id) {
      getMovieDetails(this.props.match.params.id);
    }
  }

  render() {
    const { currentMovie, movies, movieToAdd, movieToDelete, movieToEdit } = this.props;

    return (
      <>
        {currentMovie ? <HeaderMovieDetails movie={currentMovie}/> : <div>Loading...</div>}

        <main className={styles.movieDetailsPageMain}>
          <div className={styles.movieDetailsPageFilter}>
            <FilterBar/>
          </div>
          <div className={styles.movieDetailsPageFilms}>
            {movies.map((movie) => (
              <div
                key={movie.id}
                className={styles.movieDetailsPageFilm}
              >
                <Film
                  id={movie.id}
                  year={movie.release_date}
                  title={movie.title}
                  genres={movie.genres}
                  imageSource={movie.poster_path}
                />
              </div>
            ))}
          </div>
          <AddMovieModal
            isOpen={movieToAdd}
          />
          <DeleteMovieModal
            isOpen={movieToDelete}
          />
          <EditMovieModal
            isOpen={movieToEdit}
          />
        </main>
        <Footer/>
      </>
    )
  }

}

const mapStateToProps = (state) => {

  return {
    movies: state.movies,
    currentMovie: state.currentMovie,
    movieToAdd: state.movieToAdd,
    movieToDelete: state.movieToDelete,
    movieToEdit: state.movieToEdit,
    sort: state.sort,
    filter: state.filter
  }
}

const mapDispatchToProps =
  {
    getMovies,
    getMovieDetails
  };

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsPage);
