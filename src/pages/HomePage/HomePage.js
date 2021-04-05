import React, { useEffect, useState } from 'react';
import { Header, Footer, FilterBar, Film } from '../../components/';
import { mockData } from '../../mockData';
import styles from './HomePage.module.scss';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(mockData);
  }, []);

  return (
    <>
      <Header />
      <main className={styles.homePage}>
        <div className={styles.homePageFilter}>
          <FilterBar />
        </div>
        <div className={styles.homePageFilms}>
          {movies.map((item, index) => (
            <div key={index} className={styles.homePageFilm}>
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
