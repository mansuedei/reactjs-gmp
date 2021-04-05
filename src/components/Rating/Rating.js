import React from 'react';
import styles from './Rating.module.scss';

export const Rating = ({ rating }) => {

  return (
    <div className={styles.rating}>
      {rating}
    </div>
  )
}