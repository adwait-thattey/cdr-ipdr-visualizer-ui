import React from 'react';

import styles from './Data.module.scss';

import { dateTimeString } from '../../services/dateUtils';

const CDRData = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h5>CDR</h5>
        <h3>{data.id}</h3>
      </div>
      <div className={styles.item}>
        <h5>Timestamp</h5>
        <h3>{dateTimeString(data.timestamp)}</h3>
      </div>
      <div className={styles.item}>
        <h5>From</h5>
        <h3>{data.from_number}</h3>
      </div>
      <div className={styles.item}>
        <h5>To</h5>
        <h3>{data.to_number}</h3>
      </div>
      <div className={styles.item}>
        <h5>Duration</h5>
        <h3>
          {Math.floor(data.duration / 60)} mins
          {data.duration % 60 > 0 ? ' ' + (data.duration % 60) + ' secs' : ''}
        </h3>
      </div>
      <div className={styles.item}>
        <h5>Type</h5>
        <h3>{data.type === 'IN' ? 'INCOMING' : 'OUTGOING'}</h3>
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
    </div>
  );
};

export default CDRData;
