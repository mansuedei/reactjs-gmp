import React from 'react';
import { Button, Logo, SearchBar } from "..";
import styles from './Header.module.scss';
import { openAddMovieModal } from "../../store/actions";
import { connect } from "react-redux";

const Header = ({ openAddMovieModal }) => {

  const blankSlate = {
    title: '',
    poster_path: '',
    overview: '',
    runtime: '',
    genres: '',
    release_date: undefined,
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerAddMovie}>
        <Logo/>
        <div className={styles.headerButton}>
          <Button
            onClick={() => {
              openAddMovieModal(blankSlate);
            }}
            title="+Add movie"
            color="gray"
            textColor="red"/>
        </div>
      </div>
      <div className={styles.headerSearchBar}>
        <SearchBar/>
      </div>
    </header>
  )
}

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = {
  openAddMovieModal
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
