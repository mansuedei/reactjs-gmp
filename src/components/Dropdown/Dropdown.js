import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSortParameter } from '../../store/actions/movies';
import styles from './Dropdown.module.scss';

export const Dropdown = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState({ value: 'release_date' });
  const handleChange = (e) => {
    const value = e.target.value;

    setSelected({ value });
    dispatch(setSortParameter(value))
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
        <option value='vote_average'>
          genre
        </option>
      </select>
    </div>
  )
}
