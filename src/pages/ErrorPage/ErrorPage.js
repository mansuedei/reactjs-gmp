import React from 'react';
import { Button } from '../../components';
import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.scss';

const ErrorPage = () => {
  return (
    <div className={styles.errorPage}>
      <h3>Page not found</h3>
      <h1>404</h1>
      <Link to="/">
        <Button title="Go back to home" textColor="red"/>
      </Link>
    </div>
  );
};

export default ErrorPage;
