import React, { useState } from 'react';
import styles from './Alerts.module.scss';
import { Tabs, Select, Input, Radio } from 'antd';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import { DeleteOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;
const { Option } = Select;

const logData = [
  {
    id: 1,
    timestamp: '2019-03-30T19:02:41+05:30',
    text: 'Sudden usage increase in area of tower 11-23455',
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
    text: 'New record found for monitored phone 7705632789',
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
    text: 'Sudden usage increase in watchlist watchlist123',
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
    text: 'New record found for monitored phone 8805656956',
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
    text: 'Sudden usage increase in area of tower 11-23455',
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
    text: 'Sudden usage increase in watchlist watchlist2312',
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
    id: 7,
    timestamp: '2019-03-30T19:02:41+05:30',
    text: 'Sudden usage increase in watchlist watchlist2396',
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
    id: 8,
    timestamp: '2019-03-30T19:02:41+05:30',
    text: 'Sudden usage increase in watchlist watchlist2396',
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
    id: 9,
    timestamp: '2019-03-30T19:02:41+05:30',
    text: 'Sudden usage increase in watchlist watchlist2396',
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
    id: 10,
    timestamp: '2019-03-30T19:02:41+05:30',
    text: 'Sudden usage increase in watchlist watchlist2396',
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

const monitoredItem = [
  {
    id: 1,
    text: 'Monitoring Tower 11-89520',
  },
  {
    id: 2,
    text: 'Watching Watchlist 123',
  },
  {
    id: 3,
    text: 'Monitoring Phone 9905656956',
  },
  {
    id: 4,
    text: 'Monitoring Tower 11-23455',
  },
  {
    id: 5,
    text: 'Watching Watchlist 2396',
  },
  {
    id: 6,
    text: 'Monitoring Tower 11-36548',
  },
  {
    id: 7,
    text: 'Watching Watchlist 2312',
  },
  {
    id: 8,
    text: 'Monitoring Tower 11-78567',
  },
];

const Log = () => {
  const [logId, setLogId] = useState(-1);
  // const [val, setVal] = useState(1);
  const [monitoredList, setMonitoredList] = useState(monitoredItem);

  const [inputVal, setInputVal] = useState({
    id: Date.now(),
    type: 'watchlist',
    text: '',
    mode: 1,
  });

  const handleInput = (key, value) => {
    console.log(value);
    setInputVal({ ...inputVal, [key]: value });
  };

  const resetInput = () => {
    setInputVal({
      id: Date.now(),
      type: 'watchlist',
      text: '',
      mode: 1,
    });
  };

  const saveInput = () => {
    setMonitoredList([inputVal, ...monitoredList]);
    resetInput();
  };

  const handleDelete = (id) => {
    setMonitoredList(monitoredList.filter((item) => item.id !== id));
  };

  return (
    <div className={styles.container}>
      <Header title="Alerts" onFilterClick={() => {}} />
      <div className={styles.section}>
        <div className={styles.section1}>
          <h4>Logs</h4>
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
                          {/* <div>To: {item.to_number}</div> */}
                          <div>Duration: {item.duration} seconds</div>
                          <div>Call Type: {item.call_type}</div>
                        </>
                      );
                    })}
            </div>
          </div>
          <div className={styles.subsection2}>
            <h4>Set Monitored Items</h4>
            <div className={styles.monitoringForm}>
              <Select
                defaultValue="watchlist"
                className={styles.input}
                value={inputVal.type}
                onChange={(value) => handleInput('type', value)}
              >
                <Option value="watchlist">Watchlist</Option>
                <Option value="tower">Tower</Option>
                <Option value="phone">Phone</Option>
              </Select>
              {}
              <Input
                placeholder="Enter Details"
                className={styles.input}
                value={inputVal.text}
                onChange={(e) => handleInput('text', e.target.value)}
              />
              <Radio.Group
                onChange={(e) => handleInput('mode', e.target.value)}
                value={inputVal.mode}
                className={styles.inputOpt}
              >
                <Radio value={1}>On Spike</Radio>
                <Radio value={2}>On New Record</Radio>
              </Radio.Group>
              <Button text={'Save'} onClick={saveInput} />
            </div>
          </div>
        </div>
        <div className={styles.section3}>
          <h4>List Items being monitored</h4>
          {monitoredList.map((item) => {
            return (
              <div
                className={`${styles.logItem} ${styles.monitoredItem} `}
                key={item.id}
                // onClick={() => setLogId(item.id)}
              >
                <div className={styles.logText}>{item.text}</div>
                <DeleteOutlined onClick={() => handleDelete(item.id)} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Log;
