import React, { useState } from 'react';
import styles from './SameNumber.module.scss';
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

const SameNumber = () => {
  const history = useHistory();
  const [inputVal, setInputVal] = useState({
    mode: 'phone',
    value: '',
  });

  const [show, setShow] = useState(false);
  const [result, setResult] = useState([1231231234, 1231231234, 1231231234]);

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
      <h1>Same Phone Number Prediction</h1>
      <div className={styles.formContainer}>
        <Input
          placeholder="Enter Data"
          className={styles.input}
          value={inputVal.value}
          onChange={(e) => handleInput('value', e.target.value)}
        />
        <Button text={'Search'} onClick={searchRecord} />
      </div>
      {show ? (
        <div className={styles.resultContainer}>
          {result.map((obj) => (
            <div className={styles.resultItem}>{obj}</div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default SameNumber;
