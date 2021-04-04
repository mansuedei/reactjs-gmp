import React, { useEffect, useState } from 'react';
import { Footer, FilterBar, Film } from '../../components/';
import { mockData } from '../../mockData';
import styles from './HomePage.module.scss';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(mockData);
  }, []);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.mainFilter}>
          <FilterBar />
        </div>
        <div className={styles.mainFilms}>
          {movies.map((item, index) => (
            <div key={index} className={styles.mainFilm}>
              <Film
                year={item.year} 
                title={item.title} 
                category={item.category} 
                image={item.image}
              />
            </div>
          ))}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
