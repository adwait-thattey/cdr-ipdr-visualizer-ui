import React from 'react';
import { Tabs } from 'antd';
import Activity from '../Activity/Activity';
import styles from './Sidepanel.module.scss';

const { TabPane } = Tabs;

const SidePanel = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div>
        <Tabs
          type="card"
          defaultActiveKey="1"
          size="large"
          onChange={() => null}
        >
          <TabPane tab="Details" key="1">
            {data && data.type === 'user' && (
              <div className={styles.container}>
                <div className={styles.item}>
                  <h5>Name</h5>
                  <h3>{data.name}</h3>
                </div>
                <div className={styles.item}>
                  <h5>Address</h5>
                  <h3>{data.address}</h3>
                </div>
                <div className={styles.item}>
                  <h5>Mobile Details</h5>
                  {data.phone_numbers.map((each, key) => {
                    return (
                      <div key={key} className={styles.phoneContainer}>
                        <div className={styles.phoneItemContainer}>
                          <h3>Phone Number</h3>
                          <h3>{each.number}</h3>
                        </div>
                        <div className={styles.phoneItemContainer}>
                          <h3>Imsi Number</h3>
                          <h3>{each.imsi}</h3>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </TabPane>
          <TabPane tab="Activity" key="2">
            {data && data.type === 'user' && (
              <>
                <Activity />
              </>
            )}
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default SidePanel;
