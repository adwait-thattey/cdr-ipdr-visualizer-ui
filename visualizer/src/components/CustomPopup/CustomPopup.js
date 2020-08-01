import React from 'react';
import styles from './CustomPopup.module.scss';

const CustomPopup = (props) => {
  return (
    <div
      className={styles.hoverModal}
      style={{ left: props.x + 90, top: props.y + 45 }}
    >
      <div className={styles.hoverModalValue}>{props.data.name}</div>
    </div>
  );
};

export default CustomPopup;
