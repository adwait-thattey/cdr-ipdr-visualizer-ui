import React, { useEffect, useState, useMemo } from 'react';
import styles from './Map.module.scss';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useParams, Redirect } from 'react-router-dom';
import { Modal } from 'antd';
import Filter from './MapFilter';
import SidePanel from '../../components/SidePanel/MapSidePanel';

import MapView from '../../components/Map/Map';

import { dataToGeoJSON, arrangeGeoJSONData } from '../../services/MapData';

const getUserData = async () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res({
        name: 'Brijesh Bumrela',
        address: 'Death Valley',
        phone_numbers: [
          { number: '7985641784', imsi: '9878ARUSNCJA1234' },
          { number: '9898784515', imsi: '7878AQNSANWJ1234' },
        ],
        devices: [
          { imei: 'AYDBWTAJRK23', mac: '80:20:42:41:41' },
          { imei: 'QEUSMSGFYS98', mac: '80:20:42:11:90' },
        ],
      });
    }, 1000);
  });

const cdrData = [
  {
    lat: 23.1234,
    lng: 78.124,
    timestamp: '2020-07-05T19:17:31',
    id: 1,
    type: 'cdr',
  },
  {
    lat: 22.5234,
    lng: 77.942,
    timestamp: '2020-01-25T22:30:38',
    id: 2,
    type: 'cdr',
  },
  {
    lat: 24.7834,
    lng: 76.524,
    timestamp: '2020-07-16T22:58:21',
    id: 3,
    type: 'cdr',
  },
  {
    lat: 22.8934,
    lng: 78.324,
    timestamp: '2020-05-16T18:49:36',
    id: 4,
    type: 'cdr',
  },
];

const ipdrData = [
  {
    lat: 22.1234,
    lng: 75.154,
    timestamp: '2020-04-22T08:10:57',
    id: 1,
    type: 'ipdr',
  },
  {
    lat: 24.6234,
    lng: 79.943,
    timestamp: '2020-05-03T09:21:24',
    id: 2,
    type: 'ipdr',
  },
  {
    lat: 23.5734,
    lng: 79.524,
    timestamp: '2020-04-28T23:50:07',
    id: 3,
    type: 'ipdr',
  },
  {
    lat: 22.1234,
    lng: 77.324,
    timestamp: '2020-07-01T18:54:54',
    id: 4,
    type: 'ipdr',
  },
];

const initialFilters = {
  cdr: true,
  ipdr: true,

  time_start: null,
  time_end: null,

  user_id: null,
};

const Map = () => {
  const { id } = useParams();

  // Modal to showcase the pop up modal on hovering the node
  const [showFilterModal, setShowFilterModal] = useState(false);

  // Sidepanel to showcase the detailed side panel
  const [detailPanel, setDetailPanel] = useState(null);

  const [data, updateData] = useState(null);

  useEffect(() => {
    handleFilters(filters);
  }, []);

  const [geoJSONData, updateGeoJSONData] = useState([]);

  // Filters state
  const [filters, setFilters] = useState({ ...initialFilters, user_id: id });

  const handleFilterModal = (status) => setShowFilterModal(status);

  const handleFilters = async (newFilterState) => {
    setShowFilterModal(false);
    const mapData = [];
    if (newFilterState.ipdr) {
      mapData.push(...ipdrData);
    }
    if (newFilterState.cdr) {
      mapData.push(...cdrData);
    }
    const data = {
      user: await getUserData(newFilterState.user_id),
      data: mapData,
    };
    updateData(data);
    const geoJSONData = arrangeGeoJSONData(mapData.map(dataToGeoJSON));
    updateGeoJSONData(geoJSONData);
    setDetailPanel({
      user: data.user,
      points: geoJSONData,
    });
    setFilters(newFilterState);
  };

  return (
    <>
      <Redirect to={`/map/${filters.user_id}`} />
      <Modal
        title="Apply Filters"
        visible={showFilterModal}
        onCancel={() => handleFilterModal(false)}
        footer={null}
      >
        <Filter
          updateChange={handleFilters}
          modalChange={handleFilterModal}
          initial={filters}
        />
      </Modal>
      <div className={styles.fullContainer}>
        <SearchBar onFilterClick={() => handleFilterModal(true)} />
        <div className={styles.networkWrapper}>
          <div className={styles.graphCanvas}>
            <MapView pointsGeoJSON={geoJSONData} />
          </div>
          <div className={styles.sidepanelWrapper}>
            {detailPanel && <SidePanel data={detailPanel} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
