import React from 'react';
import styles from './Input.module.scss';

const Input = ({ name, placeholder, onChange, title, value, width }) => {
  return (
    <div className={styles.inputHead}>
      <label>{title}</label>
      <input
        style={{ width }}
        className={styles.input}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;
