import React, { useEffect, useState, useMemo } from 'react';
import styles from './Map.module.scss';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useParams, Redirect } from 'react-router-dom';
import { Modal } from 'antd';
import Filter from './MapFilter';
import SidePanel from '../../components/SidePanel/MapSidePanel';

import MapView from '../../components/Map/Map';

import { dataToGeoJSON, arrangeGeoJSONData } from '../../services/MapData';
import { getTimelineDataFilters_Stub as getTimeLineDataFilters } from '../../services/timeline';

import {
  getCDRData_Stub as getCDRData,
  getIPDRData_Stub as getIPDRData,
  getUserData_Stub as getUserData,
} from '../../services/getData';

const initialFilters = {
  cdr: true,
  ipdr: true,

  time_start: undefined,
  time_end: undefined,

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

  const showData = async (type, id) => {
    let netData;
    if (type == 'ipdr') {
      netData = await getIPDRData(id);
    } else {
      netData = await getCDRData(id);
    }

    setDetailPanel((prev) => {
      return { ...prev, data: { data: netData[0], type: type } };
    });
  };

  const updateWithData = async (newFilterState) => {
    const mapData = await getTimeLineDataFilters(newFilterState);
    const data = {
      user: (await getUserData(newFilterState.user_id))[0],
      data: mapData,
    };
    const geoJSONData = arrangeGeoJSONData(mapData.map(dataToGeoJSON));
    updateGeoJSONData(geoJSONData);
    updateData(data);
    setDetailPanel({
      user: data.user,
      points: geoJSONData,
      showData: showData,
      data: null,
    });
  };

  const handleFilters = (newFilterState) => {
    setShowFilterModal(false);
    setFilters(newFilterState);
    updateWithData(newFilterState);
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
