import React, { useState } from 'react';
import { DottedIcon } from '../../assets/icons/DottedIcon';
import styles from './DottedIconDropdown.module.scss';
import { connect } from "react-redux";
import {
  openDeleteMovieModal,
  openEditMovieModal
} from "../../store/actions";

const DottedIconDropdown = ({
                              id,
                              movies,
                              openDeleteMovieModal,
                              openEditMovieModal
                            }) => {

  const selectedMovie = movies.find(movie => movie.id === id);

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const showDropdown = () => setDropdownOpen(true);
  const hideDropdown = () => setDropdownOpen(false);

  return (
    <div className={styles.dottedIconDropdown}>
      <div onClick={showDropdown} className={styles.dottedIconDropdownIcon}>
        <DottedIcon/>
      </div>
      {isDropdownOpen && (
        <div className={styles.dottedIconDropdownPopUp}>
          <button onClick={hideDropdown} className={styles.dottedIconDropdownCloseIcon}>X</button>
          <div onClick={() => {
            openEditMovieModal(selectedMovie);
            hideDropdown()
          }} className={styles.dottedIconDropdownOption}>Edit
          </div>
          <div onClick={() => {
            openDeleteMovieModal(selectedMovie);
            hideDropdown()
          }} className={styles.dottedIconDropdownOption}>Delete
          </div>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}

const mapDispatchToProps = {
  openDeleteMovieModal,
  openEditMovieModal
};

export default connect(mapStateToProps, mapDispatchToProps)(DottedIconDropdown);
