import React from 'react';
import styles from './Dashboard.module.scss';
import Header from '../../components/Header/Header';
import CustomCard from '../../components/CustomCard/CustomCard';
import { LineChartOutlined } from '@ant-design/icons';
const Dashboard = () => {
  return (
    <div className={styles.container}>
      <Header title="Dashboard" onFilterClick={() => {}} />
      <div className={styles.section}>
        <div className={styles.section1}>
          <CustomCard title="Upload CSV Sheets" icon={<LineChartOutlined />} />
          <CustomCard title="Visualize Data" icon={<LineChartOutlined />} />
          <CustomCard title="Watch List" icon={<LineChartOutlined />} />
          <CustomCard title="Alerts" icon={<LineChartOutlined />} />
        </div>
        <div className={styles.section2}>
          <div className={styles.subsection1}>
            <div></div>
          </div>
          <div className={styles.subsection2}></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
