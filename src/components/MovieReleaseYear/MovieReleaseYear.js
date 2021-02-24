import React from 'react';
import PropTypes from 'prop-types';

export const MovieReleaseYear = ({ year }) => {
  return (
    <div className='movie-release-year'>{year}</div>
  )
}

MovieReleaseYear.propTypes = {
  year: PropTypes.string,
};
