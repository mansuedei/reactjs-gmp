import React from 'react';
import { Button, Logo, SearchBar } from "..";
import styles from './Header.module.scss';

export const Header = ({ openAddMovie }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerAddMovie}>
        <Logo />
        <div className={styles.headerButton}>
          <Button
            onClick={openAddMovie}
            title="+Add movie"
            color="gray"
            textColor="red" />
        </div>
      </div>
      <div className={styles.headerSearchBar}>
        <SearchBar />
      </div>
    </header>
  )
}
