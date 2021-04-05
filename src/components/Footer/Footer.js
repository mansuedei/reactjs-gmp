import React from 'react';
import { Logo } from '..';
import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
    </footer>
  )
}
