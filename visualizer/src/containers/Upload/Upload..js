import React from "react";
import styles from "./Upload.module.scss";
import { Tabs } from "antd";
import Header from "../../components/Header/Header";
import Cdr from "./Cdr/Cdr";
import Ipdr from "./Ipdr/Ipdr";
import Lists from "./Lists/Lists";

const { TabPane } = Tabs;

const Upload = () => {
  return (
    <div className={styles.container}>
      <Header title="Upload Data" onFilterClick={() => {}} />
      <div className={styles.section}>
        <Tabs type="card" className={styles.tabContainer}>
          <TabPane tab="CDR" className={styles.tab} key="1">
            <Cdr />
          </TabPane>
          <TabPane tab="IPDR" className={styles.tab} key="2">
            <Ipdr />
          </TabPane>
          <TabPane tab="Lists" className={styles.tab} key="3">
            <Lists />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Upload;
