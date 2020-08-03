import React, { useState } from 'react';
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
import DualUserAnalysis from './DualUserAnalysis/DualUserAnalysis';
import TowerAnalysis from './TowerAnalysis/TowerAnalysis';
import SameNumber from './SameNumber/SameNumber';
import SpamDetection from './SpamDetection/SpamDetection';
import SpeechRecog from './SpeechRecog/SpeechRecog';
import VoiceRecog from './VoiceRecog/VoiceRecog';

const Dashboard = () => {
  let history = useHistory();
  const [miniTool, setMiniTool] = useState(<SingleUserAnalysis />);

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
            <CustomTile
              title="Single User Analysis"
              onClick={() => setMiniTool(<SingleUserAnalysis />)}
            />
            <CustomTile
              title="Dual User Analysis"
              onClick={() => setMiniTool(<DualUserAnalysis />)}
            />
            <CustomTile
              title="Tower analysis"
              onClick={() => setMiniTool(<TowerAnalysis />)}
            />
            <CustomTile
              title="Same Phone number predictions"
              onClick={() => setMiniTool(<SameNumber />)}
            />
            <CustomTile
              title="Spam Detection"
              onClick={() => setMiniTool(<SpamDetection />)}
            />
            <CustomTile
              title="Speech Recognition"
              onClick={() => setMiniTool(<SpeechRecog />)}
            />
            <CustomTile
              title="Voice Recognition"
              onClick={() => setMiniTool(<VoiceRecog />)}
            />
          </div>
          <div className={styles.subsection2}>{miniTool}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
