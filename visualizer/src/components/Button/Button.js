import React from 'react';
import styles from './Button.module.scss';

const Button = ({ text, onClick, width, height }) => {
  return (
    <div className={styles.buttonWrapper}>
      <button
        onClick={onClick}
        className={styles.button}
        style={{ width: width, height: height }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
