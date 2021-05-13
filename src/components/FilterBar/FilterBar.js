import React from 'react';
import { connect } from 'react-redux';
import Dropdown from '../Dropdown';
import FilterButton from '../FilterButton';
import styles from './FilterBar.module.scss';

const data = [
  {
    title: 'All',
  },
  {
    title: 'Drama',
  },
  {
    title: 'Comedy',
  },
  {
    title: 'Adventure',
  },
  {
    title: 'Romance',
  },
];

const FilterBar = ({ movies }) => {

  return (
    <div className={styles.filterBarWrapper}>
      <div className={styles.filterBar}>
        <div className={styles.filterBarButtons}>
          {data.map((item, index) => (
            <div key={index} className={styles.filterBarButton}>
              <FilterButton
                title={item.title}>
              </FilterButton>
            </div>
          ))}
        </div>
        <Dropdown/>
      </div>
      <div className={styles.filterBarBorder}/>
      <div className={styles.filterBarResults}>
        <span className={styles.filterBarResultsBold}>{movies.length}</span> movies found
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {

  return {
    movies: state.movies
  }
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
