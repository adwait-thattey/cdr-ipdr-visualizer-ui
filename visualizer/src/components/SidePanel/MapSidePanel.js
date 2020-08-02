import React from 'react';

import SidePanel from './Sidepanel';
import { Steps } from 'antd';
import UserData from '../UserData/UserData';

const { Step } = Steps;

function dateTimeString(timestamp) {
  const date = new Date(timestamp);

  return `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()} ${date.toLocaleTimeString()}`;
}

const MapSidePanel = ({ data }) => {
  const tabs = ['User', 'Activity'];
  const content = [
    data && data.user && <UserData data={data.user} />,
    data && data.points && (
      <h1>
        <Steps progressDot current={data.points.length} direction="vertical">
          {data.points.map((val, index) => (
            <Step
              key={index}
              title={val.properties.type.toUpperCase()}
              description={dateTimeString(val.properties.timestamp[0])}
            />
          ))}
        </Steps>
      </h1>
    ),
  ];
  return <SidePanel tabs={tabs} content={content} />;
};

export default MapSidePanel;
