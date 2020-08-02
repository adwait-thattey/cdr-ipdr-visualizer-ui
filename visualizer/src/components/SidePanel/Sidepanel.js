import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import Activity from '../Activity/Activity';
import styles from './Sidepanel.module.scss';
import CCheckBox from '../Checkbox/CCheckbox';

const { TabPane } = Tabs;

const SidePanel = ({ data: propData, highLightNode, removeNode }) => {
  const [data, setData] = useState(propData)

  useEffect(() => {
    setData(propData);
  }, [propData]);

  const highlight = (e) => highLightNode(data, e.target.checked);
  const remove = () => removeNode(data);

  console.log(data && data.phone_numbers);

  return (
    <div>
      <div>
        <Tabs
          type="card"
          defaultActiveKey={0}
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
                <div className={styles.item}>
                  <CCheckBox handleChange={highlight} name="Highlight Node" checked={data.highlighted}/>
                  <CCheckBox handleChange={remove} name="Remove Node" checked={false}/>
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
