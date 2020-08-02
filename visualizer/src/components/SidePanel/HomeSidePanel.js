import React from 'react';

import SidePanel from './Sidepanel';
import Activity from '../Activity/Activity';
import styles from './HomeSidePanel.module.scss';

const HomeSidePanel = ({ data }) => {
  const tabs = ['Details', 'Activity'];
  const content = [
    data && data.type === 'user' && (
      <div className={styles.container}>
        <div className={styles.item}>
          <h5>Name</h5>
          <h3>{data.name}</h3>
        </div>
        <div className={styles.item}>
          <h5>Address</h5>
          <h3>{data.address}</h3>
        </div>
        <div className={styles.item}>
          <h5>Mobile Details</h5>
          {data.phone_numbers.map((each, key) => {
            return (
              <div key={key} className={styles.phoneContainer}>
                <div className={styles.phoneItemContainer}>
                  <h3>Phone Number</h3>
                  <h3>{each.number}</h3>
                </div>
                <div className={styles.phoneItemContainer}>
                  <h3>Imsi Number</h3>
                  <h3>{each.imsi}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    ),
    data && data.type === 'user' && (
      <>
        <Activity />
      </>
    ),
  ];
  return <SidePanel tabs={tabs} content={content} />;
};

export default HomeSidePanel;
