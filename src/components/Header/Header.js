import React, { useState, useRef } from 'react';
import { Button, Logo, SearchBar, Modal, AddMovieModalContent } from "../../components/";
import { FIRST_BUTTON_TITLE, SECOND_BUTTON_TITLE } from './consts';
import styles from './Header.module.scss';

export const Header = () => {
  const formRef = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  }

  const handleSubmit = () => {
    const form = formRef.current;
  }

  const handleCancel = () => {
    setOpen(false);
  }
  const defaultState = {
    title: "",
    URL: "",
    overview: "",
    runTime: "",
    releaseDate: "",
  };
  const handleReset = () => {
    const form = formRef.current;
    form.setState(defaultState);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerAddMovie}>
        <Logo />
        <div className={styles.headerButton}>
          <Button onClick={openModal} title="+Add movie" color="gray" textColor="red" />
        </div>
        {isOpen && <Modal
          title="ADD MOVIE"
          firstButtonTitle={FIRST_BUTTON_TITLE}
          secondButtonTitle={SECOND_BUTTON_TITLE}
          onCancel={handleCancel}
          onReset={handleReset}
          onSubmit={handleSubmit}
        >
          <AddMovieModalContent ref={formRef}></AddMovieModalContent>
        </Modal>}
      </div>
      <div className={styles.headerSearchBar}>
        <SearchBar />
      </div>
    </header>
  )
}
