import React, { useState } from 'react';
import { Button, Logo, SearchBar, AddMovieModal } from "..";
import styles from './Header.module.scss';

export const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  }

  const handleModalToggle = (isOpen) => {
    setModalOpen(!isOpen);
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerAddMovie}>
        <Logo />
        <div className={styles.headerButton}>
          <Button
            onClick={openModal}
            title="+Add movie"
            color="gray"
            textColor="red" />
        </div>
        <AddMovieModal isOpen={isModalOpen} toggleOpen={handleModalToggle} />
      </div>
      <div className={styles.headerSearchBar}>
        <SearchBar />
      </div>
    </header>
  )
}
