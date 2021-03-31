import React from 'react';
import { Footer, Filter, MovieCard } from '../../components/';
import styles from './HomePage.module.scss';

export const HomePage = () => {
  const options = [
    {
      year: '2001',
      title: 'Spirited Away',
      category: 'Animation',
      image: 'https://neilmc74.files.wordpress.com/2010/03/spirited-away-2.jpg'

    },
    {
      year: '2001',
      title: 'Spirited Away',
      category: 'Animation',
      image: 'https://neilmc74.files.wordpress.com/2010/03/spirited-away-2.jpg'
    },
    {
      year: '2001',
      title: 'Spirited Away',   
      category: 'Animation',
      image: 'https://neilmc74.files.wordpress.com/2010/03/spirited-away-2.jpg'  
    },
    {
      year: '2001', 
      title: 'Spirited Away',
      category: 'Animation',
      image: 'https://neilmc74.files.wordpress.com/2010/03/spirited-away-2.jpg'
    },
    {
      year: '2001',
      title: 'Spirited Away',
      category: 'Animation',
      image: 'https://neilmc74.files.wordpress.com/2010/03/spirited-away-2.jpg'
    },
    {
      year: '2001',
      title: 'Spirited Away',
      category: 'Animation',
      image: 'https://neilmc74.files.wordpress.com/2010/03/spirited-away-2.jpg'
    }
  ];

  return (
    <>
      <main className={styles.main}>
        <div className={styles.mainFilter}>
          <Filter />
        </div>
        <div className={styles.mainMovies}>
          {options.map((item, index) => (
            <div key={index} className={styles.mainMovieCard}>
              <MovieCard 
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
