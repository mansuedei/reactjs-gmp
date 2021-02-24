import React from 'react';
import { FilterOption, Dropdown } from '../../components/';

const categories = [
  {
    title: 'All',
  },
  {
    title: 'Documentary',
  },
  {
    title: 'Comedy',
  },
  {
    title: 'Horror',
  },
  {
    title: 'Crime',
  },
];

export const Filter = () => {
  return (
    <div className='filter__wrapper'>
      <div className='filter'>
        <div className='filter__buttons'>
          {categories.map((item, index) => (
            <div key={index} className='filter__button'>
              <FilterOption title={item.title} />
            </div>
          ))}
        </div>
        <Dropdown></Dropdown>
      </div>
      <div className='filter__border'></div>
      <div className='filter__results'><span className='filter__results--bold'>39</span> movies found</div>
    </div>
  )
}
