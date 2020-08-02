import React from 'react';

import SidePanel from './Sidepanel';
import Activity from '../Activity/Activity';
import UserData from '../UserData/UserData';

const HomeSidePanel = ({ data }) => {
  const tabs = ['Details', 'Activity'];
  const content = [
    data && data.type === 'user' && <UserData data={data} />,
    data && data.type === 'user' && (
      <>
        <Activity />
      </>
    ),
  ];
  return <SidePanel tabs={tabs} content={content} />;
};

export default HomeSidePanel;
