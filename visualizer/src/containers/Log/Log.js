import React, { useState } from 'react';
import styles from './Log.module.scss';
import { Tabs } from 'antd';
import Header from '../../components/Header/Header';

const { TabPane } = Tabs;

const logData = [
  {
    id: 1,
    timestamp: '2019-03-30T19:02:41+05:30',
    text: 'New suspect @ 7594568568',
    from_number: '9447774476',
    to_number: '9876543211',
    duration: 471,
    call_type: 'Outgoing',
    imei: null,
    imsi: null,
    cell_id: null,
    location_lat: null,
    location_long: null,
  },
  {
    id: 2,
    timestamp: '2019-03-30T19:02:41+05:30',
    text: 'New record found for monitored phone 9905632789',
    from_number: '9447774476',
    to_number: '9876543211',
    duration: 471,
    call_type: 'Outgoing',
    imei: null,
    imsi: null,
    cell_id: null,
    location_lat: null,
    location_long: null,
  },
  {
    id: 3,
    timestamp: '2019-03-30T19:02:41+05:30',
    text: 'New suspect @ 7594568568',
    from_number: '9447774476',
    to_number: '9876543211',
    duration: 471,
    call_type: 'Outgoing',
    imei: null,
    imsi: null,
    cell_id: null,
    location_lat: null,
    location_long: null,
  },
  {
    id: 4,
    timestamp: '2019-03-30T19:02:41+05:30',
    text: 'New suspect @ 7594568568',
    from_number: '9447774476',
    to_number: '9876543211',
    duration: 471,
    call_type: 'Outgoing',
    imei: null,
    imsi: null,
    cell_id: null,
    location_lat: null,
    location_long: null,
  },
  {
    id: 5,
    timestamp: '2019-03-30T19:02:41+05:30',
    text: 'New suspect @ 7594568568',
    from_number: '9447774476',
    to_number: '9876543211',
    duration: 471,
    call_type: 'Outgoing',
    imei: null,
    imsi: null,
    cell_id: null,
    location_lat: null,
    location_long: null,
  },
  {
    id: 6,
    timestamp: '2019-03-30T19:02:41+05:30',
    text: 'New suspect @ 7594568568',
    from_number: '9447774476',
    to_number: '9876543211',
    duration: 471,
    call_type: 'Outgoing',
    imei: null,
    imsi: null,
    cell_id: null,
    location_lat: null,
    location_long: null,
  },
];

const Log = () => {
  const [logId, setLogId] = useState(-1);

  return (
    <div className={styles.container}>
      <Header title="Logs" onFilterClick={() => {}} />
      <div className={styles.section}>
        <div className={styles.section1}>
          {logData.map((item) => {
            return (
              <div
                className={styles.logItem}
                key={item.id}
                onClick={() => setLogId(item.id)}
              >
                {item.text}
              </div>
            );
          })}
        </div>
        <div className={styles.section2}>
          <div className={styles.subsection1}>
            <h3>Alert Details</h3>
            <div className={styles.details}>
              {logId === -1
                ? 'Select log item to view details'
                : logData
                    .filter((item) => item.id === logId)
                    .map((item) => {
                      return (
                        <>
                          <h4>{item.text}</h4>
                          <div>Time: {item.timestamp}</div>
                          <div>To: {item.to_number}</div>
                          <div>Duration: {item.duration} seconds</div>
                          <div>Call Type: {item.call_type}</div>
                        </>
                      );
                    })}
            </div>
          </div>
          <div className={styles.subsection2}>Set Monitored Items</div>
        </div>
        <div className={styles.section3}>List Items being monitored</div>
      </div>
    </div>
  );
};

export default Log;
