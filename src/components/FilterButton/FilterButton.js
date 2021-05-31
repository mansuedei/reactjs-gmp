import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterButton.module.scss';
import { connect } from "react-redux";
import { applyFilterGetMovies } from "../../store/actions";

const FilterButton = ({ title, sort, applyFilterGetMovies }) => {
  const filter = title === 'All' ? null : title;

  return (
    <button
      className={styles.filterButton}
      onClick={() => {
        applyFilterGetMovies(sort, filter)
      }}>
      {title}
    </button>
  )
}

FilterButton.propTypes = {
  title: PropTypes.string
};

const mapStateToProps = (state) => {

  return {
    sort: state.sort
  }
}

const mapDispatchToProps = {
  applyFilterGetMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton);
