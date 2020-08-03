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
  const [result, setResult] = useState([9125475694, 7984565122, 9784512354]);

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
    if (inputVal.value === '9416544511') {
      setResult([9845461235, 9845687954, 8899564754]);
    } else if (inputVal.value === '8798554681') {
      setResult([9756456241, 8784564126]);
    } else if (inputVal.value === '9864126478') {
      setResult([7846451212, 4556123657, 8465123214]);
    } else if (inputVal.value === '7784641235') {
      setResult([8864625264, 7784656123, 7894561232]);
    }
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
