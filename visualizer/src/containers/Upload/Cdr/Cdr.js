import React from 'react';
import styles from './Cdr.module.scss';
import { Typography } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Button from '../../../components/Button/Button';

const { Title } = Typography;

const Cdr = () => {
  return (
    <div className={styles.container}>
      <div className={styles.element}>
        <Title level={4}>Upload</Title>

        <div className={styles.caption}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          condimentum nisl maximus elit ultrices porta. Nullam dapibus vulputate
          orci, eget dictum dolor iaculis ac. Quisque feugiat quam et ipsum
          tristique ultricies.
        </div>
        <Button text={'Upload'} />
      </div>
      <div className={styles.element}>
        <Title level={4}>Upload</Title>

        <div className={styles.caption}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          condimentum nisl maximus elit ultrices porta. Nullam dapibus vulputate
          orci, eget dictum dolor iaculis ac. Quisque feugiat quam et ipsum
          tristique ultricies.
        </div>
        <Button text={'Upload'} />
      </div>
    </div>
  );
};

export default Cdr;
