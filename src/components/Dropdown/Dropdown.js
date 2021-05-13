import React from 'react';
import { connect } from 'react-redux';
import styles from './Dropdown.module.scss';
import { applySortGetMovies } from "../../store/actions";

const Dropdown = ({ sort, filter, applySortGetMovies }) => {

  return (
    <div className={styles.dropdown}>
      <label htmlFor='films-sort' className={styles.dropdownLabel}>
        Sort by
      </label>
      <select
        value={sort}
        onChange={(e) => {
          applySortGetMovies(e.target.value, filter)
        }}
        className={styles.dropdownSelect}>
        <option value='title'>
          title
        </option>
        <option value='release_date'>
          release date
        </option>
      </select>
    </div>
  )
}

const mapStateToProps = (state) => {

  return {
    sort: state.sort,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  applySortGetMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
