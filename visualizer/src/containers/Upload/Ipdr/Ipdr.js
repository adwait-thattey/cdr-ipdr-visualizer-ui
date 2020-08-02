import React from 'react';
import styles from './Ipdr.module.scss';
import { Typography } from 'antd';
import Button from '../../../components/Button/Button';

const { Title } = Typography;

const Ipdr = () => {
  return (
    <div className={styles.container}>
      <div className={styles.element}>
        <Title level={4}>Upload IPDR v1</Title>

        <div className={styles.caption}>
          Visualization made easy ! Upload the IP Detail Record(IPDR v1) data
          here and get started.
        </div>
        <Button text={'Upload'} />
      </div>
      <div className={styles.element}>
        <Title level={4}>Upload IPDR v2</Title>

        <div className={styles.caption}>
          Visualization made easy ! Upload the IP Detail Record(IPDR v2) data
          here and get started.
        </div>
        <Button text={'Upload'} />
      </div>
    </div>
  );
};

export default Ipdr;
