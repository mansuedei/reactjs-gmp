import React, { useState } from 'react';
import { Button, FormInput } from '../../components';
import styles from './SearchBar.module.scss';

export const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleChange = (event) => {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    setSearchText(value);
  };

  const onSubmit = () => {
    console.log(searchText);
  };

  return (
    <div className={styles.searchBar}>
      <h1 className={styles.searchBarTitle}>Find your movie</h1>
      <div className={styles.searchBarContainer}>
        <div className={styles.searchBarInput}>
          <FormInput
            value={searchText}
            onChange={handleChange}
            placeholder='What do you want to watch?'/>
        </div>
        <div className={styles.searchBarButton}>
          <Button
            onClick={onSubmit}
            title='Search'
            color='red'
            size='big'/>
        </div>
      </div>
    </div>
  );
};
