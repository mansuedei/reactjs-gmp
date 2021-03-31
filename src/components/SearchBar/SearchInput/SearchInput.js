import React from 'react';
import styles from './SearchInput.module.scss';

export const SearchInput = () => {
  return (
    <input className={styles.searchInput} placeholder='What do you want to watch?'></input>
  );
};
