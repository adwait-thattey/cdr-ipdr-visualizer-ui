import React from 'react';

import { Steps, Tabs } from 'antd';
import UserData from '../UserData/UserData';
import IPDRData from '../Data/IPDRData';
import CDRData from '../Data/CDRData';

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
          <TabPane tab="Timeline" key="2">
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
                      style={{ fontWeight: 'bolder', cursor: 'pointer' }}
                      onClick={() => {
                        data.showData(val.properties.type, val.properties.id);
                      }}
                    />
                  ))}
                </Steps>
              </h1>
            )}
          </TabPane>
          {data.data && (
            <TabPane tab="Data" key="3">
              {data.data.type === 'ipdr' && <IPDRData data={data.data.data} />}
              {data.data.type === 'cdr' && <CDRData data={data.data.data} />}
            </TabPane>
          )}
        </Tabs>
      </div>
    </div>
  );
};

export default MapSidePanel;
