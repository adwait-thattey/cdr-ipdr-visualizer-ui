import React from 'react';
import styles from './CustomTile.module.scss';

const CustomTile = (props) => {
  return (
    <div className={styles.container} onClick={props.onClick}>
      {/* <div className={styles.cardIcon}>{props.icon}</div> */}
      <div className={styles.cardText}>{props.title}</div>
    </div>
  );
};

export default CustomTile;
