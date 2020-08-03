import React, { useEffect, useState } from 'react';

import { Row, Col } from 'antd';
import { useParams } from 'react-router-dom';

import styles from './SingleUser.module.scss';

import UsersTable from '../../components/Charts/UsersTable';

import UsageChart from '../../components/Charts/UsageChart';
import ServicesChart from '../../components/Charts/ServicesChart';

import { getSingleUserData_Stub as getSingleUserData } from '../../services/getSingleUserData';
import Header from '../../components/Header/Header';

const SingleUser = () => {
  const { id } = useParams();

  const [data, updateData] = useState(null);

  useEffect(() => {
    (async () => {
      updateData(await getSingleUserData(id));
    })();
  }, [id]);

  if (data == null) {
    return <Header title="User Analysis" />;
  }

  const { cdr, ipdr, services, users, stats } = data;

  return (
    <>
      <Header title="User Analysis" />
      <Row justify="center">
        <Col span={23}>
          <Row justify="center">
            <Col span={4}>
              <a href={`/map/${id}`}>
                <div className={styles.name}>Show User Timeline</div>
              </a>
            </Col>
          </Row>
          <Row justify="space-around" align="center">
            {stats.map((val, index) => (
              <Col span={4} key={index}>
                <div className={styles.stats}>
                  <h1>val.key</h1>
                  <h3>val.value</h3>
                </div>
              </Col>
            ))}
          </Row>
          <Row justify="space-around" align="center">
            <Col span={13}>
              <div className={styles.tableContainer}>
                <UsersTable data={users} />
              </div>
            </Col>
            <Col span={11}>
              <Row>
                <ServicesChart data={services} />
              </Row>
              <Row>
                <UsageChart cdr={cdr} ipdr={ipdr} />
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default SingleUser;
