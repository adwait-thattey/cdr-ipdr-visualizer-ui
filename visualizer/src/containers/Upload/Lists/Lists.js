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
  }
];

const Lists = () => {
  const [list, setList] = useState(listsData);
  const [inputData, setInputData] = useState({
    id: Date.now(),
    name: '',
    content: '',
  });

  useEffect(() => {
    const getData = async() => {
      let res = await axios.get('/data/watchlists');
      setList(res.data)
    }
    getData();
  }, []);

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
      await axios.post('/data/watchlists/', inputData);
      setList([inputData, ...list]);
    }
    resetInput();
  };

  const itemSelect = (id) => {
    setInputData(list.find((item) => item.id === id));
  };

  console.log(inputData);

  return (
    <div className={styles.container}>
      <div className={styles.panelContainer}>
        {list.map((item, key) => (
          <div key={key} className={styles.panelItem} onClick={() => itemSelect(item.id)}>
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
              value={inputData.raw_data}
              onChange={(e) => inputHandler('raw_data', e.target.value)}
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
