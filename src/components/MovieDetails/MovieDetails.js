import React, { useEffect, useState } from "react";
import { HeaderMovieDetails, Footer, FilterBar, Film } from '..';
import { mockData } from '../../mockData';
import styles from './MovieDetails.module.scss';

export const MovieDetails = ({ movie }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(mockData);
  }, []);

  return (
    <>
      <HeaderMovieDetails movie={movie} />
      <main className={styles.movieDetails}>
        <div className={styles.movieDetailsFilter}>
          <FilterBar />
        </div>
        <div className={styles.movieDetailsFilms}>
          {movies.map((item, index) => (
            <div key={index} className={styles.movieDetailsFilm}>
              <Film image={item.image} year={item.year} title={item.title} category={item.category} />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}