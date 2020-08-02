import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import Activity from '../Activity/Activity';
import styles from './Sidepanel.module.scss';
import CCheckBox from '../Checkbox/CCheckbox';
import UserData from '../UserData/UserData';

const { TabPane } = Tabs;

const SidePanel = (props) => {
  const { data: propData, highLightNode, removeNode } = props;
  const [data, setData] = useState(propData);

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
                  <CCheckBox
                    handleChange={highlight}
                    name="Highlight Node"
                    checked={data.highlighted}
                  />
                  <CCheckBox
                    handleChange={remove}
                    name="Remove Node"
                    checked={false}
                  />
                  <a href="/map/1" target="_blank">View User timeline</a>
                </div>
                <UserData data={data} />
              </div>
            )}
          </TabPane>
          <TabPane tab="Activity" key="2">
            {data && data.type === 'user' && (
              <>
                <Activity {...props} />
              </>
            )}
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default SidePanel;
