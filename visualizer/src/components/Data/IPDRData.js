import React from 'react';

import styles from './Data.module.scss';

import { dateTimeString } from '../../services/dateUtils';

const IPDRData = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h5>IPDR</h5>
        <h3>{data.id}</h3>
      </div>
      <div className={styles.item}>
        <h5>Start Time</h5>
        <h3>{dateTimeString(data.start_time)}</h3>
      </div>
      <div className={styles.item}>
        <h5>Source</h5>
        <h3>
          Private IP: {data.private_ip} PORT: {data.private_port}
        </h3>
        <h3>
          Public IP: {data.public_ip} PORT: {data.public_port}
        </h3>
      </div>
      <div className={styles.item}>
        <h5>Destination</h5>
        <h3>
          IP: {data.destination_ip} PORT: {data.destination_port}
        </h3>
      </div>
      <div className={styles.item}>
        <h5>Duration</h5>
        <h3>
          {Math.floor(data.duration / 60)} mins
          {data.duration % 60 > 0 ? ' ' + (data.duration % 60) + ' secs' : ''}
        </h3>
      </div>
      <div className={styles.item}>
        <h5>From</h5>
        <h3>{data.from_number}</h3>
      </div>
      <div className={styles.item}>
        <h5>IMEI</h5>
        <h3>{data.imei}</h3>
      </div>
      <div className={styles.item}>
        <h5>IMSI</h5>
        <h3>{data.imsi}</h3>
      </div>
      <div className={styles.item}>
        <h5>Cell ID</h5>
        <h3>{data.cell_id}</h3>
      </div>
      <div className={styles.item}>
        <h5>Location</h5>
        <h3>
          Lat: {data.location_lat} Lng: {data.location_long}
        </h3>
      </div>
      <div className={styles.item}>
        <h5>Download Volume</h5>
        <h3>{data.download_data_volume} bytes</h3>
      </div>
      <div className={styles.item}>
        <h5>Upload Volume</h5>
        <h3>{data.upload_data_volume} bytes</h3>
      </div>
    </div>
  );
};

export default IPDRData;
