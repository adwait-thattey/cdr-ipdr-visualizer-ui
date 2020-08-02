import React, { useState } from 'react';
import styles from './DateTimeInput.module.scss';

const DateTimeInput = ({ name, onChange, title, value, width }) => {
  value = value || new Date().toISOString();

  const valDate = value.substr(0, 10);
  const valTime = value.substr(11, 8);

  const [date, changeDate] = useState(valDate);
  const [time, changeTime] = useState(valTime);

  return (
    <div className={styles.inputHead}>
      <label>{title}</label>
      <div style={{ width }} className={styles.inputContainer}>
        <input
          type="date"
          step={1}
          className={styles.input}
          onChange={(e) => {
            changeDate(e.target.value);
            onChange(e.target.value + 'T' + time, name);
          }}
          value={date}
        />
        <input
          type="time"
          step={1}
          className={styles.input}
          onChange={(e) => {
            changeTime(e.target.value);
            onChange(date + 'T' + e.target.value, name);
          }}
          value={time}
        />
      </div>
    </div>
  );
};

export default DateTimeInput;
