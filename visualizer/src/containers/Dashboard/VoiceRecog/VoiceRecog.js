import React, { useState } from 'react';
import styles from './VoiceRecog.module.scss';
import Icon, {
  UploadOutlined,
  LineChartOutlined,
  EyeOutlined,
  AlertOutlined,
  InboxOutlined,
} from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
// import {  } from 'antd';

import { Select, Input, Radio, Upload, message } from 'antd';
import Button from '../../../components/Button/Button';

const { Option } = Select;

const { Dragger } = Upload;

const props = {
  name: 'file',
  // multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const VoiceRecog = () => {
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
      <h1>Voice Recognition</h1>
      <div className={styles.formContainer}>
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from
            uploading company data or other band files
          </p>
        </Dragger>

        <Button text={'Search'} onClick={searchRecord} />
      </div>
    </div>
  );
};

export default VoiceRecog;
