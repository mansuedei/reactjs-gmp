import React from 'react';
import PropTypes from 'prop-types';

export const FilterOption = ({ title }) => {
  return (
    <button className='filter-option'>{title}</button>
  )
}

FilterOption.propTypes = {
  title: PropTypes.string,
};
