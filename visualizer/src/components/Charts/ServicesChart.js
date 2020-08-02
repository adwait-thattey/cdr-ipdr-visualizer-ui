import React, { useMemo, useState } from 'react';
import { Dropdown, Menu, Button } from 'antd';
import styles from './Chart.module.scss';
import {
  AiOutlineDownCircle,
  AiOutlineBarChart,
  AiOutlinePieChart,
  AiFillHdd,
} from 'react-icons/ai';
import { PieChart, BarChart } from './CategoryChart';

const Chart = ({ data }) => {
  const labels = useMemo(() => {
    return data ? data.map((val) => val.name) : null;
  }, [data]);

  const [dataSeries, timeSeries] = useMemo(() => {
    return data
      ? [data.map((val) => val.total_data), data.map((val) => val.total_times)]
      : [null, null];
  }, [data]);

  const [selected, setSelected] = useState('Traffic');

  const [ChartType, setType] = useState(() => PieChart);

  const handleMenuClick = ({ key }) => {
    setSelected(key);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="Traffic">Traffic</Menu.Item>
      <Menu.Item key="Frequency">Frequency</Menu.Item>
    </Menu>
  );

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h3 className={styles.title}>
          <AiFillHdd /> Services Used
        </h3>
        <div className={styles.control}>
          <div className={styles.margin}>
            <Button
              onClick={() => {
                setType(() => BarChart);
              }}
            >
              <AiOutlineBarChart size="18" />
            </Button>{' '}
            <Button
              onClick={() => {
                setType(() => PieChart);
              }}
            >
              <AiOutlinePieChart size="18" />
            </Button>
          </div>
          <Dropdown overlay={menu}>
            <Button className={styles.margin}>
              {selected}
              <AiOutlineDownCircle size="18" />
            </Button>
          </Dropdown>
        </div>
      </div>
      {selected === 'Traffic' && labels && (
        <ChartType
          height={350}
          width={500}
          id={selected}
          labels={labels}
          series={dataSeries}
          title={'Traffic'}
          yQuantity="bytes"
          color={'#4caf50'}
        />
      )}
      {selected === 'Frequency' && labels && (
        <ChartType
          height={350}
          width={500}
          id={selected}
          labels={labels}
          series={timeSeries}
          title={'Frequency'}
          yQuantity="times"
          color={'#2b908f'}
        />
      )}
    </div>
  );
};

export default Chart;
