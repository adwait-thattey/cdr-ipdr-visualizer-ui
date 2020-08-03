import React, { useState, useEffect } from 'react';
import styles from './Upload.module.scss';
import { Tabs } from 'antd';
import Header from '../../components/Header/Header';
import Cdr from './Cdr/Cdr';
import Ipdr from './Ipdr/Ipdr';
import Lists from './Lists/Lists';
import { useParams } from 'react-router-dom';
import AudioUpload from './Audio/Audio';

const { TabPane } = Tabs;

const Upload = () => {
  let { id } = useParams();
  const defaultActiveTab = id ? id : 'audio';
  return (
    <div className={styles.container}>
      <Header title="Upload Data" onFilterClick={() => {}} />
      <div className={styles.section}>
        <Tabs
          type="card"
          className={styles.tabContainer}
          defaultActiveKey={defaultActiveTab}
        >
          <TabPane tab="CDR" className={styles.tab} key="cdr">
            <Cdr />
          </TabPane>
          <TabPane tab="IPDR" className={styles.tab} key="ipdr">
            <Ipdr />
          </TabPane>
          <TabPane tab="Lists" className={styles.tab} key="lists">
            <Lists />
          </TabPane>
          <TabPane tab="Audio" className={styles.tab} key="audio">
            <AudioUpload />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Upload;
