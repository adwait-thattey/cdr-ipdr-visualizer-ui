import Axios from './axios';

async function getTimeLineData(user_id, type, time_start, time_end) {
  const params = {
    type,
    time_start,
    time_end,
  };
  return new Promise((res, rej) => {
    Axios.get(`/timeline/users/${user_id}`, {
      method: 'GET',
      params: params,
    })
      .then((response) => {
        res(response.data);
      })
      .catch((err) => {
        console.error(err);
        rej([]);
      });
  });
}

async function getTimelineData(filters) {
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
