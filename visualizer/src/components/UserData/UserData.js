import React from 'react';

import styles from './UserData.module.scss';

const UserData = ({ data }) => {
  return (
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
        <h5>Mobile Numbers</h5>
        {data.phone_numbers.map((each, key) => {
          return (
            <div key={key} className={styles.phoneContainer}>
              <div className={styles.phoneItemContainer}>
                <h3>Phone Number</h3>
                <h3>{Object.keys(each)[0]}</h3>
              </div>
              <div className={styles.phoneItemContainer}>
                <h3>IMSI Number</h3>
                <h3>{each[Object.keys(each)[0]][0][0]}</h3>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.item}>
        <h5>Devices</h5>
        {data.devices.map((each, key) => {
          return (
            <div key={key} className={styles.phoneContainer}>
              <div className={styles.phoneItemContainer}>
                <h3>IMEI Number</h3>
                <h3>{each.imei}</h3>
              </div>
              <div className={styles.phoneItemContainer}>
                <h3>MAC Address</h3>
                <h3>{each.mac}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserData;
