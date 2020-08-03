import React, { useState, useEffect } from 'react';
import styles from './Alerts.module.scss';
import { Tabs, Select, Input, Radio, Spin } from 'antd';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import { DeleteOutlined } from '@ant-design/icons';
import axios from '../../services/axios';

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
  const [logs, setLogs] = useState([]);
  const [monitoredList, setMonitoredList] = useState([]);

  const [inputVal, setInputVal] = useState({
    // id: Date.now(),
    name: '',
    entity: 'phone',
    value: '',
    alert_type: 'new record',
  });

  const handleInput = (key, value) => {
    console.log(value);
    setInputVal({ ...inputVal, [key]: value });
  };

  const resetInput = () => {
    setInputVal({
      name: '',
      entity: 'phone',
      value: '',
      alert_type: 'new record',
    });
  };

  const saveInput = async () => {
    let res = await axios.post('/data/alerts/', inputVal);
    if (res.status === 201) {
      setMonitoredList([inputVal, ...monitoredList]);
      resetInput();
    }
  };

  const handleDelete = async (id) => {
    let res = await axios.delete('/data/alerts', { data: { id: id } });
    if (res.status === 200) {
      setMonitoredList(monitoredList.filter((item) => item.id !== id));
    }
  };

  const getData = async () => {
    let res1 = await axios.get('/data/alerts');
    setMonitoredList(res1.data.reverse());
    let res2 = await axios.get('/data/alertinstances');
    setLogs(res2.data.reverse());
    // console.log(res2.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.container}>
      <Header title="Alerts" onFilterClick={() => {}} />
      <div className={styles.section}>
        <div className={styles.section1}>
          <h4>Logs</h4>
          {logs.map((item) => {
            return (
              <div
                className={styles.logItem}
                key={item.id}
                onClick={() => setLogId(item.id)}
              >
                {item.alert.entity === 'phone'
                  ? `New record found for monitored phone ${item.alert.value}`
                  : item.alert.entity === 'watchlist'
                  ? `Sudden usage increase in watchlist ${item.alert.value}`
                  : `Sudden usage increase in area of tower ${item.alert.value}`}
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
                : logs
                    .filter((item) => item.id === logId)
                    .map((item) => {
                      return (
                        <>
                          <h4>
                            {item.alert.entity === 'phone'
                              ? `New record found for monitored phone ${item.alert.value}`
                              : item.alert.entity === 'watchlist'
                              ? `Sudden usage increase in watchlist ${item.alert.value}`
                              : `Sudden usage increase in area of tower ${item.alert.value}`}
                          </h4>
                          <div>Time: {item.timestamp}</div>
                          {/* <div>To: {item.to_number}</div> */}
                          <div>Alert Name: {item.alert.name}</div>
                          <div>
                            Call Type: {item.object.attribute} -{' '}
                            {item.object.value}
                          </div>
                        </>
                      );
                    })}
            </div>
          </div>
          <div className={styles.subsection2}>
            <h4>Set Monitored Items</h4>
            <div className={styles.monitoringForm}>
              <Input
                placeholder="Enter Alert Title"
                className={styles.input}
                value={inputVal.name}
                onChange={(e) => handleInput('name', e.target.value)}
              />
              <Select
                defaultValue="phone"
                className={styles.input}
                value={inputVal.entity}
                onChange={(value) => handleInput('entity', value)}
              >
                <Option value="watchlist">Watchlist</Option>
                <Option value="tower">Tower</Option>
                <Option value="phone">Phone</Option>
              </Select>
              <Input
                placeholder="Enter Details"
                className={styles.input}
                value={inputVal.value}
                onChange={(e) => handleInput('value', e.target.value)}
              />
              <Radio.Group
                onChange={(e) => handleInput('alert_type', e.target.value)}
                value={inputVal.alert_type}
                className={styles.inputOpt}
              >
                <Radio value={'spike'}>On Spike</Radio>
                <Radio value={'new record'}>On New Record</Radio>
              </Radio.Group>
              <Button text={'Save'} onClick={saveInput} />
            </div>
          </div>
        </div>
        <div className={styles.section3}>
          <h4>List Items being monitored</h4>
          {monitoredList.length > 0 ? (
            monitoredList.map((item) => {
              return (
                <div
                  className={`${styles.logItem} ${styles.monitoredItem} `}
                  key={item.id}
                  // onClick={() => setLogId(item.id)}
                >
                  <div className={styles.logText}>
                    {item.name + ' : ' + item.entity + '-' + item.value}
                  </div>
                  <DeleteOutlined onClick={() => handleDelete(item.id)} />
                </div>
              );
            })
          ) : (
            <Spin />
          )}
        </div>
      </div>
    </div>
  );
};

export default Log;
