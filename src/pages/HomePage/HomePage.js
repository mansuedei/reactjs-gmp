import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./HomePage.module.scss";
import {
  Footer
} from "../../components/";

import Film from "../../components/Film";
import FilterBar from "../../components/FilterBar";
import Header from "../../components/Header";
import AddMovieModal from "../../components/AddMovieModal";
import DeleteMovieModal from "../../components/DeleteMovieModal";
import EditMovieModal from "../../components/EditMovieModal";

import {
  getMovies,
  getMovieDetails
} from "../../store/actions";

class HomePage extends Component {

  componentDidMount() {
    const { getMovies, sort, filter } = this.props;
    getMovies(sort, filter);
  }

  render() {
    const { movies, movieToAdd, movieToDelete, movieToEdit } = this.props;

    return (
      <>
        <Header/>
        <main className={styles.HomePageMain}>
          <div className={styles.HomePageFilter}>
            <FilterBar/>
          </div>
          <div className={styles.HomePageFilms}>
            {movies.map((movie) => (
              <div
                key={movie.id}
                className={styles.HomePageFilm}
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
    );
  }

}

const mapStateToProps = (state) => {

  return {
    movies: state.movies,
    movieToAdd: state.movieToAdd,
    movieToDelete: state.movieToDelete,
    movieToEdit: state.movieToEdit,
    sort: state.sort,
    filter: state.filter
  };
};

const mapDispatchToProps =
  {
    getMovies,
    getMovieDetails
  };

function loadData(store) {
  return store.dispatch(getMovies());
}

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(HomePage),
  loadData
};
