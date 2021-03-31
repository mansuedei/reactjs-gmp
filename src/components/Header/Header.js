import React from 'react';
import { Button, Logo, SearchBar } from '../../components/';
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <>
      <div className={styles.headerAddMovie}>
        <Logo />
        <Button title='+Add movie' color='gray' textColor='red' />
      </div>
      <div className={styles.headerSearchBar}>
        <SearchBar />
      </div>
    </>
  )
}