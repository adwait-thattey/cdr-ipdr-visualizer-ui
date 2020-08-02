import React from 'react';
import styles from './Dashboard.module.scss';
import Header from '../../components/Header/Header';

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <Header title="Dashboard" onFilterClick={() => {}} />
      <div className={styles.section}></div>
    </div>
  );
};

export default Dashboard;
