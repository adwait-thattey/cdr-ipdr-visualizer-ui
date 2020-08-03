import React from 'react';

import { Row, Col } from 'antd';
import { useParams } from 'react-router-dom';

import styles from './SingleUser.module.scss';

import UsersTable from '../../components/Charts/UsersTable';

import UsageChart from '../../components/Charts/UsageChart';
import ServicesChart from '../../components/Charts/ServicesChart';

const series = [1, 4, 6, 7, 6, 8, 9];
const data = [
  '2020-11-10',
  '2020-11-09',
  '2020-08-01',
  '2020-01-19',
  '2019-12-11',
  '2019-10-10',
  '2018-11-19',
];

const cdr = [0, 1, 2, 3, 4, 5, 6].map((i) => {
  return { date: data[i], total_time: series[i] };
});

const ipdr = [0, 1, 2, 3, 4, 5, 6].map((i) => {
  return { date: data[i], total_data: series[i] };
});

const service = [0, 1, 2, 3, 4, 5, 6].map((i) => {
  return {
    name: data[i],
    total_times: series[i],
    total_data: series[7 - i - 1],
    duration: series[(7 - i + 5) % 7],
  };
});

const users = [
  {
    name: 'Ram',
    total_duration: 30,
    total_times: 10,
    last_called: '2020-11-10T20:20:20',
  },
  {
    name: 'Ram2',
    total_duration: 18,
    total_times: 8,
    last_called: '2020-10-10T20:20:20',
  },
  {
    name: 'Ram3',
    total_duration: 10,
    total_times: 30,
    last_called: '2020-12-10T20:20:20',
  },
  {
    name: 'Ram4',
    total_duration: 30,
    total_times: 0,
    last_called: '2020-11-14T20:20:20',
  },
  {
    name: 'Ram',
    total_duration: 30,
    total_times: 10,
    last_called: '2020-11-10T20:20:20',
  },
  {
    name: 'Ram2',
    total_duration: 18,
    total_times: 8,
    last_called: '2020-10-10T20:20:20',
  },
  {
    name: 'Ram3',
    total_duration: 10,
    total_times: 30,
    last_called: '2020-12-10T20:20:20',
  },
  {
    name: 'Ram4',
    total_duration: 30,
    total_times: 0,
    last_called: '2020-11-14T20:20:20',
  },
];

const SingleUser = () => {
  const { id } = useParams();
  return (
    <Row justify="center">
      <Col span={23}>
        <Row justify="center">
          <Col span={4}>
            <a href={`/map/${id}`}>
              <div className={styles.name}>Name of Person</div>
            </a>
          </Col>
        </Row>
        <Row justify="space-around" align="center">
          <Col span={4}>
            <div className={styles.stats}>
              <h1>Stats</h1>
              <h3>StatsName</h3>
            </div>
          </Col>
          <Col span={4}>
            <div className={styles.stats}>
              <h1>Stats</h1>
              <h3>StatsName</h3>
            </div>
          </Col>
          <Col span={4}>
            <div className={styles.stats}>
              <h1>Stats</h1>
              <h3>StatsName</h3>
            </div>
          </Col>
          <Col span={4}>
            <div className={styles.stats}>
              <h1>Stats</h1>
              <h3>StatsName</h3>
            </div>
          </Col>
        </Row>
        <Row justify="center" align="center">
          <Col span={11}>
            <div className={styles.tableContainer}>
              <UsersTable data={users} />
            </div>
          </Col>
          <Col span={11}>
            <Row>
              <ServicesChart data={service} />
            </Row>
            <Row>
              <UsageChart cdr={cdr} ipdr={ipdr} />
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default SingleUser;
