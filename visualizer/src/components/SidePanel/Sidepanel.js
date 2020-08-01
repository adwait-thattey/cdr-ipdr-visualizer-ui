import React from 'react';
import { Tabs } from 'antd';
import ListItem from '../List/List';
import Activity from '../Activity/Activity';

const { TabPane } = Tabs;

const SidePanel = ({ data }) => {
    console.log(data);
    return (
        <div>
            <div>
                <Tabs type="card" defaultActiveKey="1" size="large" onChange={() => null}>
                    <TabPane tab="Details" key="1">
                        {data && data.type === "user" && (
                            <>
                                <div>
                                    <h5>Name</h5>
                                    <h3>{data.name}</h3>
                                </div>
                                <div>
                                    <h5>Address</h5>
                                    <h3>{data.address}</h3>
                                </div>
                                <div>
                                    <h5>Phone numbers</h5>
                                    {data.phone_numbers.map((each, key) => {
                                        return (
                                            <div key={key}>
                                                <h3>{each.number}</h3>
                                                <h3>{each.imsi}</h3>
                                            </div>
                                        )
                                    }
                                    )}
                                </div>
                            </>
                        )}
                    </TabPane>
                    <TabPane tab="Activity" key="2">
                        {data && data.type === "user" && (
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
