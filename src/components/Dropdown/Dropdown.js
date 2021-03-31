import React from 'react';
import styles from './Dropdown.module.scss';

export const Dropdown = () => {
  return (
    <div className={styles.dropdown}>
      <label htmlFor='films-sort' className={styles.dropdownLabel}>Sort by</label>
      <select id='films-sort' className={styles.dropdownSelect}>
        <option value='release date'>release date</option>
      </select>
    </div>
  )
}
