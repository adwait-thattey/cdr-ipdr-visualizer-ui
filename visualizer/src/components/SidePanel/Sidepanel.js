import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import Activity from '../Activity/Activity';
import styles from './Sidepanel.module.scss';
import CCheckBox from '../Checkbox/CCheckbox';
import UserData from '../UserData/UserData';

const { TabPane } = Tabs;

const SidePanel = (props) => {
  const { data: propData, highLightNode, removeNode, cluster } = props;

  const [data, setData] = useState(propData);

  useEffect(() => {
    setData(propData);
  }, [propData]);

  const highlight = (e) => highLightNode(data, e.target.checked);
  const remove = () => removeNode(data);


  if (cluster) {
    return (
      <div className={styles.datafields}>
        <div>
          <h4>Phone Number</h4>
          <h3>{propData && propData.node}</h3>
        </div>
        <div>
          <h4>Influence</h4>
          <h3>{propData && propData.data.influence}</h3>
        </div>
        <div>
          <h4>Community Index</h4>
          <h3>{propData && propData.data.comm_index}</h3>
        </div>
      </div>
    )
  }

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
                  <a href={`/map/${data.id}`} target="_blank">View User timeline</a>
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
