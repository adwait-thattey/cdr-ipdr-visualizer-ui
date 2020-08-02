import React from 'react';
import styles from './Cdr.module.scss';
import { Typography } from 'antd';
import Button from '../../../components/Button/Button';

const { Title } = Typography;

const Cdr = () => {
  return (
    <div className={styles.container}>
      <div className={styles.element}>
        <Title level={4}>Upload CDR v1</Title>

        <div className={styles.caption}>
          Visualization made easy ! Upload the Call Detail Record(CDR v1) data
          here and get started.
        </div>
        <Button text={'Upload'} />
      </div>
      <div className={styles.element}>
        <Title level={4}>Upload CDR v2</Title>

        <div className={styles.caption}>
          Visualization made easy ! Upload the Call Detail Record(CDR v2) data
          here and get started.
        </div>
        <Button text={'Upload'} />
      </div>
    </div>
  );
};

export default Cdr;
