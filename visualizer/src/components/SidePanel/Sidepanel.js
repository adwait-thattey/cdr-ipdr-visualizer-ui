import React from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const SidePanel = ({ tabs, content }) => {
  return (
    <div>
      <div>
        <Tabs
          type="card"
          defaultActiveKey={0}
          size="large"
          onChange={() => null}
        >
          {tabs.map((val, index) => {
            return (
              <TabPane tab={val} key={index}>
                {content[index]}
              </TabPane>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
};

export default SidePanel;
