import React, { useMemo, useState } from 'react';
import { Dropdown, Menu, Button } from 'antd';
import styles from './Chart.module.scss';
import { AiOutlineDownCircle, AiFillSignal } from 'react-icons/ai';
import DataChart from './DataChart';

const Chart = ({ ipdr, cdr }) => {
  const [ipdrSeries, ipdrLabels] = useMemo(() => {
    return ipdr
      ? [ipdr.map((val) => val.total_data), ipdr.map((val) => val.date)]
      : [null, null];
  }, [ipdr]);

  const [cdrSeries, cdrLabels] = useMemo(() => {
    return cdr
      ? [cdr.map((val) => val.total_time), cdr.map((val) => val.date)]
      : [null, null];
  }, [cdr]);

  const [selected, setSelected] = useState('Calls');

  const handleMenuClick = ({ key }) => {
    setSelected(key);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="Calls">Calls</Menu.Item>
      <Menu.Item key="Internet">Internet</Menu.Item>
    </Menu>
  );

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h3 className={styles.title}>
          <AiFillSignal /> Network Use
        </h3>
        <div className={styles.control}>
          <Dropdown overlay={menu}>
            <Button className={styles.margin}>
              {selected}
              <AiOutlineDownCircle size="18" />
            </Button>
          </Dropdown>
        </div>
      </div>
      <div style={{ overflow: 'hidden' }}>
        {selected === 'Calls' && cdrLabels && (
          <DataChart
            height={450}
            width={600}
            id={selected}
            labels={cdrLabels}
            series={cdrSeries}
            titleY={'Call Time'}
            yQuantity="secs"
            color={'#f04530'}
            shadowColor={'#ff8080'}
          />
        )}
        {selected === 'Internet' && ipdrLabels && (
          <DataChart
            height={450}
            width={600}
            id={selected}
            labels={ipdrLabels}
            series={ipdrSeries}
            titleY={'Data Transferred'}
            yQuantity="bytes"
            color={'#4075f0'}
            shadowColor={'#90a0ff'}
          />
        )}
      </div>
    </div>
  );
};

export default Chart;
