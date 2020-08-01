function dataToGeoJSON(type, data) {
  return {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [data.lng, data.lat],
    },
    properties: {
      timestamp: [{ start: data.timestamp, end: data.timestamp }],
      type: type,
      cluster: false,
      id: data.id,
    },
  };
}

function reduceCluster(accumulated, point) {
  accumulated.timestamp.push(point.timestamp[0]);
  accumulated.cluster = true;
  accumulated.type =
    accumulated.type == point.type ? accumulated.type : 'multiple';
  accumulated.id = null;
}
