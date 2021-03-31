import React from 'react';
import { Logo } from '../Logo';
import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <Logo />
    </div>
  )
}
