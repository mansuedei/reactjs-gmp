import React from "react";
import { FilterButton, Dropdown } from "..";
import styles from './FilterBar.module.scss';

const data = [
  {
    title: "All",
  },
  {
    title: "Documentary",
  },
  {
    title: "Comedy",
  },
  {
    title: "Horror",
  },
  {
    title: "Crime",
  },
];

export const FilterBar = () => {
  return (
    <div className={styles.filterBarWrapper}>
      <div className={styles.filterBar}>
        <div className={styles.filterBarButtons}>
          {data.map((item, index) => (
            <div key={index} className={styles.filterBarButton}>
              <FilterButton title={item.title}></FilterButton>
            </div>
          ))}
        </div>
        <Dropdown></Dropdown>
      </div>
      <div className={styles.filterBarBorder}></div>
      <div className={styles.filterBarResults}><span className={styles.filterBarResultsBold}>39</span> movies found</div>
    </div>
  )
}