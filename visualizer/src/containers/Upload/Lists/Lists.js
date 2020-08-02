import React, { useState, useEffect } from 'react';
import styles from './Lists.module.scss';
// import { Tabs, Row, Col } from 'antd';
import { Row, Col, List, Avatar, Form, Input, Divider } from 'antd';
import Button from '../../../components/Button/Button';
import ListSideForm from '../../../components/ListSideForm/ListSideForm';
// import { Divider } from 'rc-menu';
import axios from '../../../services/axios';

const { TextArea } = Input;

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
  const [list, setList] = useState(listsData);
  const [inputData, setInputData] = useState({
    id: Date.now(),
    name: '',
    content: '',
  });

  const getData = async () => {
    let res = await axios.get('/data/watchlists');
    console.log(res);
    return res.data;
  };

  // useEffect(() => {
  //   setList(getData());
  // }, []);

  const inputHandler = (key, value) => {
    setInputData({
      ...inputData,
      [key]: value,
    });
  };

  const resetInput = () => {
    setInputData({
      id: Date.now(),
      name: '',
      content: '',
    });
  };

  const saveInput = async () => {
    if (list.some((item) => item.id === inputData.id)) {
      const ind = list.findIndex((obj) => obj.id === inputData.id);
      list[ind] = inputData;
      // await axios.put('/data/watchlists', inputData);
      setList(list);
    } else {
      // await axios.post('/data/watchlists', inputData);
      setList([...list, inputData]);
    }
    resetInput();
  };

  const itemSelect = (id) => {
    setInputData(list.find((item) => item.id === id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.panelContainer}>
        {list.map((item) => (
          <div className={styles.panelItem} onClick={() => itemSelect(item.id)}>
            {item.name}
          </div>
        ))}
      </div>
      <div className={styles.section}>
        <h1>Enter Details</h1>
        <div className={styles.formContainer}>
          <div className={styles.formRow}>
            <div className={styles.formTitle}>Watch List Name</div>
            <Input
              placeholder="Enter Name"
              value={inputData.name}
              onChange={(e) => inputHandler('name', e.target.value)}
              className={styles.inputTextBox}
            />
          </div>
          <div className={styles.formRow}>
            <div className={styles.formTitle}>Watch List Data</div>
            <TextArea
              rows={6}
              className={styles.inputTextBox}
              value={inputData.content}
              onChange={(e) => inputHandler('content', e.target.value)}
              style={{ background: '#fff' }}
              placeholder="Enter Data Here"
            />
          </div>
          <div className={styles.formButtonSet}>
            <Button text="Create New" onClick={resetInput} />
            <Button text="Save" onClick={saveInput} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lists;
