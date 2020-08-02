import React, { useState, useMemo, useRef } from 'react';
import ReactMapGL, {
  FlyToInterpolator,
  NavigationControl,
  Marker,
  Layer,
  Source,
} from 'react-map-gl';
import Supercluster from 'supercluster';

import 'mapbox-gl/dist/mapbox-gl.css';

import styling from './Map.module.scss';
import { reduceCluster, getLineGeoJSON } from '../../services/MapData';
import MarkerPoint from './Marker';

const MAPBOX_TOKEN =
  'pk.eyJ1IjoicmFtLW4xOCIsImEiOiJja2RiZ2J4dTQwdjEyMzFwZzdpMDR5ejQ5In0.71lREfvqVll3KxP005EsKg';

const INDIA_LAT = 24.193684;
const INDIA_LNG = 78.96288;

const MAX_ZOOM = 20;
const MIN_ZOOM = 3;
const DEFAULT_ZOOM = 4;

const Map = ({ pointsGeoJSON }) => {
  const [viewport, setViewPort] = useState({
    height: '100%',
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
      radius: 25,
      maxZoom: MAX_ZOOM,
      reduce: reduceCluster,
    });
    supercluster.load(pointsGeoJSON);
    return supercluster;
  }, [pointsGeoJSON]);

  const lineGeoJSON = useMemo(() => {
    return getLineGeoJSON(pointsGeoJSON);
  }, [pointsGeoJSON]);

  const bounds = mapRef.current
    ? mapRef.current.getMap().getBounds().toArray().flat()
    : null;

  const clusters = (() => {
    if (bounds !== null) {
      const clusters = supercluster.getClusters(
        bounds,
        Math.round(viewport.zoom),
      );
      return clusters;
    }
    return [];
  })();

  return (
    <ReactMapGL
      ref={mapRef}
      {...viewport}
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
      <div className={styling.container}>
        <Source id="route" {...lineGeoJSON} />
        <Layer
          type="line"
          id="route"
          source="route"
          paint={{ 'line-width': 2 }}
        />
        {clusters.map((val, index) => {
          return (
            <Marker
              longitude={val.geometry.coordinates[0]}
              latitude={val.geometry.coordinates[1]}
              key={index}
              offsetLeft={-10}
              offsetTop={-10}
            >
              <MarkerPoint
                count={val.properties.cluster ? val.properties.point_count : 1}
                type={val.properties.type}
              />
            </Marker>
          );
        })}
      </div>
    </ReactMapGL>
  );
};

export default Map;
