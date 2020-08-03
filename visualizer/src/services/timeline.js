import Axios from './axios';

import { wrapRequest } from './getData';

export async function getTimeLineData(user_id, type, time_start, time_end) {
  const params = {
    type,
    time_start,
    time_end,
  };
  return wrapRequest(
    Axios.get(`/data/timeline/users/${user_id}`, {
      method: 'GET',
      params: params,
    }),
    [],
  );
}

export async function getTimelineDataFilters(filters) {
  let user_id = filters.user_id;
  let type;
  let time_start;
  let time_end;
  if (Number.isNaN(Date.parse(filters.time_start))) {
    time_start = undefined;
  } else {
    time_start = new Date(filters.time_start).toISOString();
  }
  if (Number.isNaN(Date.parse(filters.time_end))) {
    time_end = undefined;
  } else {
    time_end = new Date(filters.time_end).toISOString();
  }
  if (!filters.cdr || !filters.idr) {
    if (filters.cdr) {
      type = 'cdr';
    } else {
      type = 'ipdr';
    }
  }
  return getTimeLineData(user_id, type, time_start, time_end);
}

export async function getTimelineDataFilters_Stub(filters) {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          id: 1506,
          timestamp: '2020-07-10T00:38:17.174498',
          from_number: '9449397567',
          to_number: '9982068314',
          duration: 192,
          call_type: 'OUT',
          imei: '352009000000281.0',
          imsi: '405000000000283.0',
          cell_id: '40580913018651',
          location_lat: 15.2993,
          location_long: 74.124,
          type: 'cdr',
        },
        {
          id: 1507,
          timestamp: '2020-07-30T23:32:31.183477',
          from_number: '9449397567',
          to_number: '8336498579',
          duration: 342,
          call_type: 'IN',
          imei: '352009000000282.0',
          imsi: '405000000000284.0',
          cell_id: '88-57285',
          location_lat: 30.3165,
          location_long: 78.0322,
          type: 'cdr',
        },
        {
          id: 1508,
          timestamp: '2020-07-20T09:50:54.193447',
          from_number: '9449397567',
          to_number: '8641892321',
          duration: 349,
          call_type: 'OUT',
          imei: '352009000000283.0',
          imsi: '405000000000285.0',
          cell_id: '88-57285',
          location_lat: 30.3165,
          location_long: 78.0322,
          type: 'cdr',
        },
        {
          id: 1509,
          timestamp: '2020-07-30T02:13:10.203421',
          from_number: '9449397567',
          to_number: '6752655227',
          duration: 638,
          call_type: 'IN',
          imei: '352009000000284.0',
          imsi: '405000000000286.0',
          cell_id: '2578',
          location_lat: 24.6637,
          location_long: 93.9063,
          type: 'cdr',
        },
        {
          id: 1510,
          timestamp: '2020-07-10T08:58:58.212387',
          from_number: '9449397567',
          to_number: '9431870466',
          duration: 307,
          call_type: 'IN',
          imei: '352009000000285.0',
          imsi: '405000000000287.0',
          cell_id: '61000-58173',
          location_lat: 19.9615,
          location_long: 79.2961,
          type: 'cdr',
        },
        {
          id: 1511,
          timestamp: '2020-07-15T11:43:23.222592',
          from_number: '9449397567',
          to_number: '6838497363',
          duration: 246,
          call_type: 'OUT',
          imei: '352009000000286.0',
          imsi: '405000000000288.0',
          cell_id: '49980900130716-12345',
          location_lat: 13.0827,
          location_long: 80.2707,
          type: 'cdr',
        },
        {
          id: 1512,
          timestamp: '2020-07-13T23:46:58.232568',
          from_number: '9449397567',
          to_number: '7746388086',
          duration: 173,
          call_type: 'IN',
          imei: '352009000000287.0',
          imsi: '405000000000289.0',
          cell_id: '47-41203',
          location_lat: 25.447712,
          location_long: 78.111603,
          type: 'cdr',
        },
        {
          id: 1513,
          timestamp: '2020-07-19T23:57:38.241542',
          from_number: '9449397567',
          to_number: '9557052965',
          duration: 590,
          call_type: 'OUT',
          imei: '352009000000288.0',
          imsi: '405000000000290.0',
          cell_id: '4047220000000.0',
          location_lat: 19.076,
          location_long: 72.8777,
          type: 'cdr',
        },
        {
          id: 1514,
          timestamp: '2020-07-17T05:20:42.251515',
          from_number: '9449397567',
          to_number: '9674196654',
          duration: 636,
          call_type: 'IN',
          imei: '352009000000289.0',
          imsi: '405000000000291.0',
          cell_id: '40580913018651',
          location_lat: 15.2993,
          location_long: 74.124,
          type: 'cdr',
        },
      ]);
    }, 1000);
  });
}

export default getTimelineDataFilters;
