import React, { useState } from 'react';
import styles from './Dropdown.module.scss';

export const Dropdown = () => {
  const [selected, setSelected] = useState({ value: 'Genre' });
  const handleChange = (e) => {
    setSelected({ value: e.target.value });
    console.log(selected);
    console.log(e.target.value);
  };

  return (
    <div className={styles.dropdown}>
      <label htmlFor='films-sort' className={styles.dropdownLabel}>
        Sort by
      </label>
      <select value={selected.value} onChange={handleChange} className={styles.dropdownSelect}>
        <option value='release date'>
          release date
        </option>
        <option value='genre'>
          genre
        </option>
      </select>
    </div>
  )
}
