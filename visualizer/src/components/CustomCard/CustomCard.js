import React from 'react';
import styles from './CustomCard.module.scss';

const CustomCard = (props) => {
  return (
    <div className={styles.container} onClick={props.onClick}>
      <div className={styles.cardIcon}>{props.icon}</div>
      <div className={styles.cardText}>{props.title}</div>{' '}
    </div>
  );
};

export default CustomCard;
