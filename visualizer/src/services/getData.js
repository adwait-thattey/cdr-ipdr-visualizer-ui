import Axios from './axios';

export async function wrapRequest(request, rejValue) {
  return new Promise((res, rej) => {
    request
      .then((response) => {
        console.log(response);
        if (response.status <= 300) {
          res(response.data);
        } else {
          rej(response.data);
        }
      })
      .catch((err) => {
        console.error(err);
        rej(rejValue);
      });
  });
}

export async function getCDRData(cdr_id, ...cdr_ids) {
  let queryString = `?cdr=${cdr_id}`;
  for (const a of cdr_ids) {
    queryString += `&cdr=${a}`;
  }
  return wrapRequest(
    Axios.get(`/data/cdrs${queryString}`, {
      method: 'GET',
    }),
    [],
  );
}

export async function getIPDRData(ipdr_id, ...ipdr_ids) {
  let queryString = `?ipdr=${ipdr_id}`;
  for (const a of ipdr_ids) {
    queryString += `&ipdr=${a}`;
  }
  return wrapRequest(
    Axios.get(`/data/ipdrs${queryString}`, {
      method: 'GET',
    }),
    [],
  );
}

export async function getUserData(user_id, ...user_ids) {
  let queryString = `?person=${user_id}`;
  for (const a of user_ids) {
    queryString += `&person=${a}`;
  }
  return wrapRequest(
    Axios.get(`/data/persons${queryString}`, {
      method: 'GET',
    }),
    [],
  );
}

export async function getUserData_Stub(user_id, ...user_ids) {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          id: 3,
          name: 'Hello',
          address: 'Death Valley',
          phone_numbers: {
            '2324242523': [['241325424242', '3525235235']],
            '9807079023': [['247528458699', '2746824525']],
          },
          devices: [
            { imei: '224242342525' },
            { imei: '2423525252' },
            { mac: '222:242:4242' },
          ],
        },
      ]);
    }, 1000);
  });
}

export async function getIPDRData_Stub(filters) {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          id: 700,
          start_time: '2016-10-10T08:20:11',
          duration: 10,
          private_ip: '100.70.69.59',
          private_port: 53045,
          public_ip: '101.222.172.59',
          public_port: 50207,
          destination_ip: '192.12.31.90',
          destination_port: 5228,
          from_number: '9809496945',
          imei: '12345678912345',
          imsi: '987456321456789.0',
          cell_id: 'SAC:46988',
          location_lat: null,
          location_long: null,
          upload_data_volume: '848',
          download_data_volume: '504',
        },
      ]);
    }, 1000);
  });
}

export async function getCDRData_Stub(filters) {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          id: 1700,
          timestamp: '2020-07-10T04:53:44.076269',
          from_number: '6168120223',
          to_number: '7740685752',
          duration: 368,
          call_type: 'IN',
          imei: '352009000000475.0',
          imsi: '405000000000477.0',
          cell_id: '404-95-61700-1123',
          location_lat: 34.0837,
          location_long: 74.7973,
        },
      ]);
    }, 1000);
  });
}
