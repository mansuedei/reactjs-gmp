import React from "react";
import PropTypes from 'prop-types';
import { DottedIconDropdown, Chip } from "../../components/";
import styles from './Film.module.scss';

export const Film = ({ image, title, category, year }) => {
  return (
    <div className={styles.film}>
      <div className={styles.filmImageContainer}>
        <img className={styles.filmImage} src={image}></img>
      </div>
      <div className={styles.filmDropdown}>
        <DottedIconDropdown />
      </div>
      <div className={styles.filmFooter}>
        <div>
          <div className={[styles.filmTitle, styles.filmText].join(' ')}>{title}</div>
          <div className={[styles.filmCategory, styles.filmText].join(' ')}>{category}</div>
        </div>
        <Chip year={year}></Chip>
      </div>
    </div>
  )
}

Film.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
  year: PropTypes.string
};
