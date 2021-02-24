import React from 'react';
import PropTypes from 'prop-types';
import { MovieContextMenu, MovieReleaseYear } from '../../components';

export const MovieCard = ({image, title, category, year}) => {
  return (
    <div className='movie-card'>
      <div className='movie-card__image-container'>
        <img className='movie-card__image' src={image}></img>
      </div>
      <div className='movie-card__context-menu'>
        <MovieContextMenu />
      </div>
      <div className='movie-card__description'>
        <div>
          <div className='movie-card__title movie-card__text'>{title}</div>
          <div className='movie-card__category movie-card__text'>{category}</div>
        </div>
        <MovieReleaseYear year={year} />
      </div>
    </div>
  )
}

MovieCard.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
  year: PropTypes.string
};
