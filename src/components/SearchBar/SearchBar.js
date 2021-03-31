import React from 'react';
import { Button } from '../Button';
import { SearchInput } from './SearchInput';
import styles from './SearchBar.module.scss';

export const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
        <h1 className={styles.searchBarTitle}>Find your movie</h1>
        <div className={styles.searchBarContainer}>
          <div className={styles.searchBarInput}>
              <SearchInput />
          </div>
          <div className={styles.searchBarButton}>
              <Button title='Search' color='red' size='big' />
          </div>
        </div>
    </div>

  );
};  
