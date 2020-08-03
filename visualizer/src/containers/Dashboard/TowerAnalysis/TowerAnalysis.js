import React, { useState } from 'react';
import styles from './TowerAnalysis.module.scss';
import Icon, {
  UploadOutlined,
  LineChartOutlined,
  EyeOutlined,
  AlertOutlined,
} from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

import { Select, Input, Radio } from 'antd';
import Button from '../../../components/Button/Button';

const { Option } = Select;

const data = {
  stats: {
    'Total CDR Logs': 30,
    'Total IPDR Logs': 57,
    'Tower Share': 0.04310344827586207,
    'Average Daily Traffic': 90,
  },
  service_share: {
    'Unknown Service 157.240.7.20': 1150,
    'Unknown Service 31.13.70.36': 258,
    'Unknown Service 168.235.193.142': 1923,
    'Unknown Service 157.240.7.29': 719,
    'Unknown Service 74.125.200.192': 1374,
    'Unknown Service 173.252.79.3': 1380,
    'Unknown Service 104.16.88.33': 468,
    'Unknown Service 47.88.135.248': 1869,
    'Unknown Service 173.252.115.65': 1659,
    'Unknown Service 192.12.31.110': 1167,
    'Unknown Service 172.217.26.215': 882,
  },
};

const TowerAnalysis = () => {
  const [show, setShow] = useState(false);
  const history = useHistory();
  const [inputVal, setInputVal] = useState({
    mode: 'phone',
    value: '',
  });
  const handleInput = (key, value) => {
    setInputVal({ ...inputVal, [key]: value });
  };
  const clearInput = () => {
    setInputVal({
      mode: 'phone',
      value: '',
    });
  };
  const searchRecord = () => {
    setShow(true);
    clearInput();
  };

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        {!show ? (
          <div className={styles.formContainer}>
            <h1>Tower Analysis</h1>
            {/* <div className={styles.summary}>
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              Lorem Ipsum Lorem Ipsum
            </div> */}
            <Input
              placeholder="Enter Data"
              className={styles.input}
              value={inputVal.value}
              onChange={(e) => handleInput('value', e.target.value)}
            />
            <Button text={'Search'} onClick={searchRecord} />
          </div>
        ) : null}
        {show ? <div className={styles.tableContainer}></div> : null}
        {show ? <div className={styles.chartContainer}></div> : null}
      </div>
    </div>
  );
};

export default TowerAnalysis;
