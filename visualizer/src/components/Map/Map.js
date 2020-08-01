import React, { useState, useMemo, useRef } from 'react';
import ReactMapGL, {
  FlyToInterpolator,
  NavigationControl,
  Marker,
} from 'react-map-gl';
import Supercluster from 'supercluster';

import 'mapbox-gl/dist/mapbox-gl.css';

import styling from './Map.module.scss';
import reduceCluster from '../../services/MapData';

const MAPBOX_TOKEN =
  'pk.eyJ1IjoicmFtLW4xOCIsImEiOiJja2RiZ2J4dTQwdjEyMzFwZzdpMDR5ejQ5In0.71lREfvqVll3KxP005EsKg';

const INDIA_LAT = 24.193684;
const INDIA_LNG = 78.96288;

const MAX_ZOOM = 20;
const MIN_ZOOM = 3;
const DEFAULT_ZOOM = 4;

const Map = ({ points }) => {
  const [viewPort, setViewPort] = useState({
    height: '50vh',
    width: '100%',
    zoom: DEFAULT_ZOOM,
    latitude: INDIA_LAT,
    longitude: INDIA_LNG,
  });

  const mapRef = useRef();

  const flyToInterpoler = useMemo(() => {
    return new FlyToInterpolator({
      speed: 2,
      maxDuration: 2000,
    });
  }, []);

  const supercluster = useMemo(() => {
    const supercluster = new Supercluster({
      radius: 60,
      maxZoom: MAX_ZOOM,
      reduce: reduceCluster,
    });
    supercluster.load(points);
    return supercluster;
  }, [points]);

  const bounds = mapRef.current
    ? mapRef.current.getMap().getBounds().toArray().flat()
    : null;

  const clusters = supercluster.getClusters(bounds, viewPort.zoom);

  console.log(clusters);

  return (
    <ReactMapGL
      ref={mapRef}
      {...viewPort}
      mapboxApiAccessToken={MAPBOX_TOKEN}
      minZoom={MIN_ZOOM}
      maxZoom={MAX_ZOOM}
      onViewportChange={(viewport) => setViewPort(viewport)}
      transitionInterpolator={flyToInterpoler}
    >
      <div className={styling.navigation}>
        <NavigationControl
          captureClick={false}
          captureDoubleClick={false}
          captureDrag={false}
          captureScroll={false}
          showCompass={true}
        />
      </div>
      <div className={styling.container}></div>
    </ReactMapGL>
  );
};

export default Map;
