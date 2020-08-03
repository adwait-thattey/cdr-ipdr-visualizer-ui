import React from 'react';
import styles from './Dashboard.module.scss';
import Header from '../../components/Header/Header';
import CustomCard from '../../components/CustomCard/CustomCard';
import CustomTile from '../../components/CustomTile/CustomTile';
import Icon, {
  UploadOutlined,
  LineChartOutlined,
  EyeOutlined,
  AlertOutlined,
} from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import SingleUserAnalysis from './SingleUserAnalysis/SingleUserAnalysis';

const Dashboard = () => {
  let history = useHistory();

  return (
    <div className={styles.container}>
      <Header title="Dashboard" onFilterClick={() => {}} />
      <div className={styles.section}>
        <div className={styles.section1}>
          <CustomCard
            title="Upload CSV Sheets"
            icon={<UploadOutlined />}
            onClick={() => history.push('/upload')}
          />
          <CustomCard
            title="Visualize Data"
            icon={<LineChartOutlined />}
            onClick={() => history.push('/visualize')}
          />
          <CustomCard
            title="Watch List"
            icon={<EyeOutlined />}
            onClick={() => history.push('/upload/lists')}
          />
          <CustomCard
            title="Alerts"
            icon={<AlertOutlined />}
            onClick={() => history.push('/alerts')}
          />
        </div>
        <div className={styles.section2}>
          <div className={styles.subsection1}>
            <CustomTile title="Single User Analysis" onClick={() => {}} />
            <CustomTile title="Dual User Analysis" onClick={() => {}} />
            <CustomTile title="Tower analysis" onClick={() => {}} />
            <CustomTile title="IPDR correlations" onClick={() => {}} />
            <CustomTile
              title="Same Phone number predictions"
              bgcolor="#B2EBF2"
              onClick={() => {}}
            />
            <CustomTile
              title="IMEI Charts"
              bgcolor="#B2EBF2"
              onClick={() => {}}
            />
            <CustomTile
              title="Voice Recognition"
              bgcolor="#B2EBF2"
              onClick={() => {}}
            />
          </div>
          <div className={styles.subsection2}>
            <SingleUserAnalysis />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
