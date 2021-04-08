import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import styles from './MovieDetailsPage.module.scss';
import {
  HeaderMovieDetails,
  Footer,
  FilterBar,
  Film,
  DeleteMovieModal,
  EditMovieModal,
} from '../../components/';
import {
  fetchMovies,
  setEditMovie,
  setDeleteMovie,
  clearDeleteMovie,
  deleteMovie,
  clearEditMovie,
} from '../../store/actions/movies';
import {
  selectMovies,
  selectFilterGenre,
  selectEditMovie,
  selectDeleteMovie,
} from '../../store/selectors/';

export const MovieDetailsPage = () => {
  const dispatch = useDispatch();
  const [currentMovie, setCurrentMovie] = useState(333339);

  let { movies } = useSelector(selectMovies);
  const { filterGenre } = useSelector(selectFilterGenre);
  const { movieToEdit } = useSelector(selectEditMovie);
  const { movieToDelete } = useSelector(selectDeleteMovie);

  movies =
    filterGenre === null || filterGenre === 'All'
      ? movies
      : movies.filter((movie) => {
        return movie.genres.includes(filterGenre);
      });

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchMovies());
  }, [dispatch]);

  const setFilmCard = (filmId) => {
    const current = movies.find(({ id }) => id === filmId);
    setCurrentMovie(current);
  };

  const shouldOpenEditModal = Boolean(movieToEdit);
  const shouldOpenDeleteModal = Boolean(movieToDelete);

  const openEditMovie = (filmId) => {
    const movieEdit = movies.find(({ id }) => id === filmId);
    dispatch(setEditMovie(movieEdit));
  };

  const openDeleteMovie = (filmId) => {
    const movieDelete = movies.find(({ id }) => id === filmId);
    dispatch(setDeleteMovie(movieDelete));
  };

  const handleDeleteCancel = () => dispatch(clearDeleteMovie());
  const handleDeleteSubmit = () => {
    dispatch(deleteMovie(movieToDelete.id));
    dispatch(clearDeleteMovie());
  };

  const handleEditCancel = () => dispatch(clearEditMovie());

  const handleEditSubmit = () => {
    dispatch(clearEditMovie());
  };

  return (
    <>
      {currentMovie && <HeaderMovieDetails movie={currentMovie} />}
      <main className={styles.movieDetailsPageMain}>
        <div className={styles.movieDetailsPageFilter}>
          <FilterBar />
        </div>
        <div className={styles.movieDetailsPageFilms}>
          {movies.map((item, index) => (
            <div
              key={index}
              className={styles.movieDetailsPageFilm}
              onClick={() => {
                setCurrentMovie(item);
              }}
            >
              <Film
                year={item.release_date}
                title={item.title}
                genres={item.genres}
                imageSource={item.poster_path}
                openEditMovie={() => {
                  openEditMovie(item.id);
                }}
                openDeleteMovie={() => {
                  openDeleteMovie(item.id);
                }}
                setFilmCard={() => {
                  setFilmCard(item);
                }}
              />
            </div>
          ))}
        </div>
        <EditMovieModal
          isOpen={shouldOpenEditModal}
          handleEditCancel={handleEditCancel}
          handleEditSubmit={handleEditSubmit}
        />
        <DeleteMovieModal
          isOpen={shouldOpenDeleteModal}
          handleDeleteCancel={handleDeleteCancel}
          handleDeleteSubmit={handleDeleteSubmit}
        />
      </main>
      <Footer />
    </>
  )
};
