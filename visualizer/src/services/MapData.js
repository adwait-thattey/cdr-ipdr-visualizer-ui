export function dataToGeoJSON(data) {
  return {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [data.lng, data.lat],
    },
    properties: {
      timestamp: [new Date(data.timestamp).getTime()],
      type: data.type,
      cluster: false,
      id: data.id,
    },
  };
}

export function arrangeGeoJSONData(data) {
  const sortData = [];

  for (const point of data) {
    sortData.push({
      timestamp: point.properties.timestamp[0],
      data: point,
    });
  }

  return sortData
    .sort((a, b) => a.timestamp - b.timestamp)
    .map((val) => val.data);
}

export function reduceCluster(accumulated, point) {
  accumulated.timestamp.push(point.timestamp[0]);
  accumulated.cluster = true;
  accumulated.type =
    accumulated.type === point.type ? accumulated.type : 'multiple';
  accumulated.id = null;
}

export function getLineGeoJSON(data) {
  const coordinates = data.map((val) => val.geometry.coordinates);

  return {
    type: 'geojson',
    data: {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        coordinates: coordinates,
      },
    },
  };
}
