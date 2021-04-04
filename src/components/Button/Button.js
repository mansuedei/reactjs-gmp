import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss'

export const Button = ({ onClick, title, color, textColor }) => {

  const button = [styles.button, styles[color], styles[`${textColor}Text`]].join(' ')

  return (
    <button onClick={onClick} className={button}>{title}</button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
  color: PropTypes.string,
  textColor: PropTypes.string
};
