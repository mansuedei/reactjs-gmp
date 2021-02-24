import React from 'react';
import { Footer, Filter, MovieCard } from '../../components/';

export const HomePage = () => {
  const options = [
    {
      year: '2001',
      title: 'Spirited Away',
      category: 'Animation',
      image: '../../assets/images/Spirited_Away_Japanese_poster.png'

    },
    {
      year: '2001',
      title: 'Spirited Away',
      category: 'Animation',
      image: '../../assets/images/Spirited_Away_Japanese_poster.png'
    },
    {
      year: '2001',
      title: 'Spirited Away',
      category: 'Animation',
      image: '../../assets/images/Spirited_Away_Japanese_poster.png'  
    },
    {
      year: '2001',
      title: 'Spirited Away',
      category: 'Animation',
      image: '../../assets/images/Spirited_Away_Japanese_poster.png'
    },
    {
      year: '2001',
      title: 'Spirited Away',
      category: 'Animation',
      image: '../../assets/images/Spirited_Away_Japanese_poster.png'
    },
    {
      year: '2001',
      title: 'Spirited Away',
      category: 'Animation',
      image: '../../assets/images/Spirited_Away_Japanese_poster.png'
    }
  ];

  return (
    <>
      <main className='main'>
        <div className='main__filter'>
          <Filter />
        </div>
        <div className='main__movies'>
          {options.map((item, index) => (
          <div key={index} className='main__movie-card'>
            <MovieCard year={item.year} title={item.title} category={item.category} image={item.image}/>
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
