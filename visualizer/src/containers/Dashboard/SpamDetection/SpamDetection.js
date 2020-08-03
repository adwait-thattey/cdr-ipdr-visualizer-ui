import React, { useState } from 'react';
import styles from './SpamDetection.module.scss';
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

const SpamDetection = () => {
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
      <h1>Spam Detection</h1>

      {!show ? (
        <p>Click the button below to detect spam from the data stored</p>
      ) : (
        <div className={styles.listContainer}></div>
      )}
      <div className={styles.formContainer}>
        <Button text={'Search'} onClick={searchRecord} />
      </div>
    </div>
  );
};

export default SpamDetection;
