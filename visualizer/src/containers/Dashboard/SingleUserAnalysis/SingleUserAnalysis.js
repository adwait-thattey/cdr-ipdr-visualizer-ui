import React, { useState } from 'react';
import styles from './SingleUserAnalysis.module.scss';
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

const SingleUserAnalysis = () => {
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
    history.push('/user/21553');
    clearInput();
  };

  return (
    <div className={styles.container}>
      <h1>Single User Analysis</h1>
      <div className={styles.formContainer}>
        <Select
          defaultValue="phone"
          className={styles.input}
          value={inputVal.mode}
          onChange={(value) => handleInput('mode', value)}
        >
          <Option value="phone">Phone</Option>
          <Option value="imei">IMEI</Option>
          <Option value="userId">User ID</Option>
        </Select>
        <Input
          placeholder="Enter Data"
          className={styles.input}
          value={inputVal.value}
          onChange={(e) => handleInput('value', e.target.value)}
        />
        <Button text={'Search'} onClick={searchRecord} />
      </div>
    </div>
  );
};

export default SingleUserAnalysis;
