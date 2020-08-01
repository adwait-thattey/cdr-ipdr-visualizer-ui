import React from 'react';
import styles from './CustomPopup.module.scss';

const CustomPopup = (props) => {
  return (
    <div
      className={styles.hoverModal}
      style={{ left: props.x + 100, top: props.y + 25 }}
    >
      <div className={styles.hoverModalValue}>{props.data.name}</div>
    </div>
  );
};

export default CustomPopup;
