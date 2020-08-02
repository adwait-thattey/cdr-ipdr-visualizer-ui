import React from 'react';

import { Steps, Tabs } from 'antd';
import UserData from '../UserData/UserData';

import { dateTimeString } from '../../services/dateUtils';

const { Step } = Steps;
const { TabPane } = Tabs;

const MapSidePanel = ({ data }) => {
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
            {data && data.user && <UserData data={data.user} />}
          </TabPane>
          <TabPane tab="Details" key="2">
            {data && data.points && (
              <h1>
                <Steps
                  progressDot
                  current={data.points.length}
                  direction="vertical"
                >
                  {data.points.map((val, index) => (
                    <Step
                      key={index}
                      title={val.properties.type.toUpperCase()}
                      description={dateTimeString(val.properties.timestamp[0])}
                    />
                  ))}
                </Steps>
              </h1>
            )}
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default MapSidePanel;
