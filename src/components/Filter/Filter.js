import React from 'react';
import { FilterOption, Dropdown } from '../../components/';
import styles from './Filter.module.scss'

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
    <div className={styles.filterWrapper}>
      <div className={styles.filter}>
        <div className={styles.filterButtons}>
          {categories.map((item, index) => (
            <div key={index} className={styles.filterButton}>
              <FilterOption title={item.title} />
            </div>
          ))}
        </div>
        <Dropdown />
      </div>
      <div className={styles.filterBorder}></div>
      <div className={styles.filterResults}><span className={styles.filterResultsBold}>6</span> movies found</div>
    </div>
  );
};
