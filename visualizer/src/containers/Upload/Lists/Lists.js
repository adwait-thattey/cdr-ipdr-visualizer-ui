import React, { useState } from 'react';
import styles from './Lists.module.scss';
// import { Tabs, Row, Col } from 'antd';
import { Row, Col, List, Avatar, Form, Divider } from 'antd';
import Button from '../../../components/Button/Button';
import ListSideForm from '../../../components/ListSideForm/ListSideForm';
// import { Divider } from 'rc-menu';
import { black } from 'color-name';

const listsData = [
  {
    id: 1,
    name: 'Watchlist 1',
    content:
      'imei,1234567\nimei,0987654\nphone,0987656\nphone,345678345\nimei,23456754\n',
  },
  {
    id: 2,
    name: 'Watchlist 2',
    content:
      'imei,351527043500000\nimei,351527043500000\nphone,9284612974\nphone,7507763619\nimei,35200909880000\n',
  },
  { id: 3, name: 'New Watchlist', content: 'phone,1234567' },
  { id: 4, name: 'watchlist 002', content: 'imsi,123456787' },
];

const Lists = () => {
  const [selectedData, setSelectedData] = useState();

  const ShowRightPanelData = () => {
    console.log('object');
    if (!selectedData) {
      return <div>Select an item to show data</div>;
    } else {
      return <ListSideForm obj={selectedData} />;
    }
  };

  return (
    <>
      <Row>
        <Col span={5} offset={1} className={styles.lists_left_column}>
          <div className={styles.holder_div}></div>
          <div className={`${styles.list_button_wrapper} ${styles.button1}`}>
            <Button
              text={'New WatchList'}
              width={'100%'}
              height={'7vh'}
              onClick={(x) => setSelectedData({ name: '', content: '' })}
            />
            {/* <Divider /> */}
          </div>
          <List
            className={styles.watchlist_list}
            itemLayout="horizontal"
            dataSource={listsData}
            renderItem={(item) => (
              <List.Item>
                {/* <List.Item.Meta
              // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<a href="https://ant.design">{item.name}</a>}
              // description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              /> */}
                <div className={styles.list_button_wrapper}>
                  <Button
                    text={item.name}
                    width={'100%'}
                    height={'7vh'}
                    onClick={(x) => setSelectedData(item)}
                  />
                </div>
              </List.Item>
            )}
          />
          ,
        </Col>
        <Col span={1}></Col>
        <Col span={17} className={styles.lists_right_column}>
          <ShowRightPanelData />
        </Col>
      </Row>
    </>
  );
};

export default Lists;
