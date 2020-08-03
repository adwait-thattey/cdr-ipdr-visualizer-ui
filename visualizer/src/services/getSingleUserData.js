import Axios from './axios';

import { wrapRequest } from './getData';

export async function getSingleUserData(user_id) {
  return wrapRequest(
    Axios.get(`/data/persons/${user_id}/analysis`, {
      method: 'GET',
    }),
    null,
  );
}

export async function getSingleUserData_Stub(user_id) {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        users: [
          {
            id: 871,
            name: 'Mobile : 8247007911 (Unknown person)',
            total_times: 12,
            total_duration: 252,
            last_called: '2020-06-28T16:32:00.014731',
          },
          {
            id: 872,
            name: 'Mobile : 7363603685 (Unknown person)',
            total_times: 1,
            total_duration: 20,
            last_called: '2020-07-01T09:36:27.014731',
          },
          {
            id: 873,
            name: 'Mobile : 7597952059 (Unknown person)',
            total_times: 1,
            total_duration: 11,
            last_called: '2020-06-18T02:46:56.014731',
          },
          {
            id: 874,
            name: 'Mobile : 8771122747 (Unknown person)',
            total_times: 3,
            total_duration: 45,
            last_called: '2020-07-12T19:45:26.014731',
          },
          {
            id: 875,
            name: 'Mobile : 9116705579 (Unknown person)',
            total_times: 3,
            total_duration: 18,
            last_called: '2020-06-08T11:06:42.014731',
          },
          {
            id: 876,
            name: 'Mobile : 7096209224 (Unknown person)',
            total_times: 5,
            total_duration: 75,
            last_called: '2020-07-25T00:14:48.014731',
          },
          {
            id: 877,
            name: 'Mobile : 6780710987 (Unknown person)',
            total_times: 4,
            total_duration: 24,
            last_called: '2020-07-24T16:38:47.014731',
          },
          {
            id: 878,
            name: 'Mobile : 9982068314 (Unknown person)',
            total_times: 5,
            total_duration: 125,
            last_called: '2020-06-30T01:02:51.014731',
          },
          {
            id: 879,
            name: 'Mobile : 6622650817 (Unknown person)',
            total_times: 7,
            total_duration: 49,
            last_called: '2020-05-28T01:54:40.014731',
          },
          {
            id: 880,
            name: 'Mobile : 7867969545 (Unknown person)',
            total_times: 6,
            total_duration: 144,
            last_called: '2020-07-26T05:32:01.014731',
          },
          {
            id: 881,
            name: 'Mobile : 7513431070 (Unknown person)',
            total_times: 9,
            total_duration: 225,
            last_called: '2020-06-28T18:29:36.014731',
          },
          {
            id: 882,
            name: 'Mobile : 8182377720 (Unknown person)',
            total_times: 9,
            total_duration: 144,
            last_called: '2020-07-18T19:38:33.014731',
          },
          {
            id: 883,
            name: 'Mobile : 7957336494 (Unknown person)',
            total_times: 11,
            total_duration: 330,
            last_called: '2020-07-22T00:39:30.014731',
          },
          {
            id: 884,
            name: 'Mobile : 6726955357 (Unknown person)',
            total_times: 11,
            total_duration: 143,
            last_called: '2020-06-29T07:17:00.014731',
          },
          {
            id: 885,
            name: 'Mobile : 9117201575 (Unknown person)',
            total_times: 2,
            total_duration: 26,
            last_called: '2020-07-01T12:25:53.014731',
          },
          {
            id: 886,
            name: 'Mobile : 9068117958 (Unknown person)',
            total_times: 3,
            total_duration: 60,
            last_called: '2020-07-07T09:32:34.014731',
          },
          {
            id: 887,
            name: 'Mobile : 8609849517 (Unknown person)',
            total_times: 4,
            total_duration: 96,
            last_called: '2020-06-16T21:17:46.014731',
          },
          {
            id: 888,
            name: 'Mobile : 9355146292 (Unknown person)',
            total_times: 6,
            total_duration: 48,
            last_called: '2020-07-11T18:10:13.014731',
          },
          {
            id: 889,
            name: 'Mobile : 6015732350 (Unknown person)',
            total_times: 5,
            total_duration: 50,
            last_called: '2020-07-04T12:05:28.014731',
          },
          {
            id: 890,
            name: 'Mobile : 7339251714 (Unknown person)',
            total_times: 7,
            total_duration: 91,
            last_called: '2020-07-22T02:30:50.014731',
          },
          {
            id: 891,
            name: 'Mobile : 9557052965 (Unknown person)',
            total_times: 10,
            total_duration: 160,
            last_called: '2020-06-24T22:28:00.014731',
          },
          {
            id: 892,
            name: 'Mobile : 9747005110 (Unknown person)',
            total_times: 8,
            total_duration: 104,
            last_called: '2020-06-07T09:45:35.014731',
          },
          {
            id: 893,
            name: 'Mobile : 9861890896 (Unknown person)',
            total_times: 9,
            total_duration: 243,
            last_called: '2020-06-18T13:59:41.014731',
          },
          {
            id: 894,
            name: 'Mobile : 9674196654 (Unknown person)',
            total_times: 11,
            total_duration: 242,
            last_called: '2020-05-30T18:26:53.014731',
          },
          {
            id: 895,
            name: 'Mobile : 7596946402 (Unknown person)',
            total_times: 12,
            total_duration: 84,
            last_called: '2020-07-10T07:50:53.014731',
          },
          {
            id: 896,
            name: 'Mobile : 6237802887 (Unknown person)',
            total_times: 1,
            total_duration: 29,
            last_called: '2020-06-28T16:05:15.014731',
          },
          {
            id: 897,
            name: 'Mobile : 7839039370 (Unknown person)',
            total_times: 1,
            total_duration: 5,
            last_called: '2020-08-02T20:56:52.014731',
          },
          {
            id: 898,
            name: 'Mobile : 7809356378 (Unknown person)',
            total_times: 2,
            total_duration: 22,
            last_called: '2020-06-18T17:26:44.014731',
          },
          {
            id: 899,
            name: 'Mobile : 7777648580 (Unknown person)',
            total_times: 2,
            total_duration: 56,
            last_called: '2020-06-02T06:01:46.014731',
          },
          {
            id: 900,
            name: 'Mobile : 8898327708 (Unknown person)',
            total_times: 3,
            total_duration: 24,
            last_called: '2020-06-16T04:31:34.014731',
          },
          {
            id: 901,
            name: 'Mobile : 9000635057 (Unknown person)',
            total_times: 7,
            total_duration: 189,
            last_called: '2020-05-25T15:02:36.014731',
          },
          {
            id: 902,
            name: 'Mobile : 6446470695 (Unknown person)',
            total_times: 8,
            total_duration: 232,
            last_called: '2020-07-30T12:06:07.014731',
          },
          {
            id: 903,
            name: 'Mobile : 7551451502 (Unknown person)',
            total_times: 8,
            total_duration: 216,
            last_called: '2020-06-24T11:22:24.014731',
          },
          {
            id: 904,
            name: 'Mobile : 6604496040 (Unknown person)',
            total_times: 6,
            total_duration: 120,
            last_called: '2020-07-08T20:26:53.014731',
          },
          {
            id: 905,
            name: 'Mobile : 8456296215 (Unknown person)',
            total_times: 8,
            total_duration: 168,
            last_called: '2020-07-16T04:44:36.014731',
          },
          {
            id: 906,
            name: 'Mobile : 9231798411 (Unknown person)',
            total_times: 10,
            total_duration: 130,
            last_called: '2020-06-12T19:09:40.014731',
          },
          {
            id: 907,
            name: 'Mobile : 6547840215 (Unknown person)',
            total_times: 11,
            total_duration: 66,
            last_called: '2020-06-22T12:46:00.014731',
          },
          {
            id: 908,
            name: 'Mobile : 8504845358 (Unknown person)',
            total_times: 11,
            total_duration: 198,
            last_called: '2020-06-03T11:15:48.014731',
          },
          {
            id: 909,
            name: 'Mobile : 9283763562 (Unknown person)',
            total_times: 2,
            total_duration: 50,
            last_called: '2020-05-30T08:52:37.014731',
          },
          {
            id: 910,
            name: 'Mobile : 7827645664 (Unknown person)',
            total_times: 3,
            total_duration: 78,
            last_called: '2020-07-07T21:41:46.014731',
          },
          {
            id: 911,
            name: 'Mobile : 9267743913 (Unknown person)',
            total_times: 3,
            total_duration: 78,
            last_called: '2020-06-04T11:55:55.014731',
          },
          {
            id: 912,
            name: 'Mobile : 9384339059 (Unknown person)',
            total_times: 2,
            total_duration: 38,
            last_called: '2020-06-01T07:10:16.014731',
          },
          {
            id: 913,
            name: 'Mobile : 7319417862 (Unknown person)',
            total_times: 3,
            total_duration: 15,
            last_called: '2020-07-05T18:28:26.014731',
          },
          {
            id: 914,
            name: 'Mobile : 7703471485 (Unknown person)',
            total_times: 4,
            total_duration: 56,
            last_called: '2020-06-14T06:17:03.014731',
          },
          {
            id: 915,
            name: 'Mobile : 7832762037 (Unknown person)',
            total_times: 6,
            total_duration: 114,
            last_called: '2020-06-06T04:39:27.014731',
          },
          {
            id: 916,
            name: 'Mobile : 8590493387 (Unknown person)',
            total_times: 9,
            total_duration: 81,
            last_called: '2020-06-14T23:33:54.014731',
          },
          {
            id: 917,
            name: 'Mobile : 9894484886 (Unknown person)',
            total_times: 8,
            total_duration: 176,
            last_called: '2020-07-05T18:05:12.014731',
          },
          {
            id: 918,
            name: 'Mobile : 7272527632 (Unknown person)',
            total_times: 10,
            total_duration: 270,
            last_called: '2020-06-07T08:42:36.014731',
          },
          {
            id: 919,
            name: 'Mobile : 7635735787 (Unknown person)',
            total_times: 3,
            total_duration: 48,
            last_called: '2020-06-26T20:59:29.014731',
          },
          {
            id: 920,
            name: 'Mobile : 7407858588 (Unknown person)',
            total_times: 5,
            total_duration: 40,
            last_called: '2020-07-25T06:16:54.014731',
          },
        ],
        services: [
          {
            id: 48,
            total_times: 76,
            total_data: 2432,
            total_duration: 836,
          },
          {
            id: 49,
            total_times: 63,
            total_data: 1260,
            total_duration: 1008,
          },
          {
            id: 50,
            total_times: 59,
            total_data: 1062,
            total_duration: 767,
          },
          {
            id: 51,
            total_times: 2,
            total_data: 192,
            total_duration: 50,
          },
          {
            id: 52,
            total_times: 78,
            total_data: 3900,
            total_duration: 1248,
          },
          {
            id: 53,
            total_times: 55,
            total_data: 605,
            total_duration: 1265,
          },
          {
            id: 54,
            total_times: 80,
            total_data: 1680,
            total_duration: 560,
          },
          {
            id: 55,
            total_times: 93,
            total_data: 7533,
            total_duration: 930,
          },
          {
            id: 56,
            total_times: 3,
            total_data: 30,
            total_duration: 15,
          },
          {
            id: 57,
            total_times: 6,
            total_data: 594,
            total_duration: 180,
          },
        ],
        cdr: [
          {
            '2020-05-25 05:17:48.014731': 918,
          },
          {
            '2020-05-27 05:17:48.014731': 2773,
          },
          {
            '2020-05-29 05:17:48.014731': 1882,
          },
          {
            '2020-05-31 05:17:48.014731': 2670,
          },
          {
            '2020-06-02 05:17:48.014731': 2796,
          },
          {
            '2020-06-05 05:17:48.014731': 2834,
          },
          {
            '2020-06-08 05:17:48.014731': 2734,
          },
          {
            '2020-06-10 05:17:48.014731': 334,
          },
          {
            '2020-06-11 05:17:48.014731': 1644,
          },
          {
            '2020-06-14 05:17:48.014731': 231,
          },
          {
            '2020-06-16 05:17:48.014731': 299,
          },
          {
            '2020-06-17 05:17:48.014731': 1040,
          },
          {
            '2020-06-20 05:17:48.014731': 1601,
          },
          {
            '2020-06-21 05:17:48.014731': 1371,
          },
          {
            '2020-06-24 05:17:48.014731': 266,
          },
          {
            '2020-06-27 05:17:48.014731': 941,
          },
          {
            '2020-06-29 05:17:48.014731': 2298,
          },
          {
            '2020-07-01 05:17:48.014731': 2304,
          },
          {
            '2020-07-04 05:17:48.014731': 1218,
          },
          {
            '2020-07-07 05:17:48.014731': 1241,
          },
          {
            '2020-07-10 05:17:48.014731': 2670,
          },
          {
            '2020-07-13 05:17:48.014731': 1409,
          },
          {
            '2020-07-14 05:17:48.014731': 1260,
          },
          {
            '2020-07-17 05:17:48.014731': 166,
          },
          {
            '2020-07-18 05:17:48.014731': 431,
          },
          {
            '2020-07-21 05:17:48.014731': 2365,
          },
          {
            '2020-07-23 05:17:48.014731': 2777,
          },
          {
            '2020-07-24 05:17:48.014731': 1413,
          },
          {
            '2020-07-25 05:17:48.014731': 462,
          },
          {
            '2020-07-28 05:17:48.014731': 522,
          },
          {
            '2020-07-31 05:17:48.014731': 1569,
          },
        ],
        ipdr: [
          {
            '2020-05-25 05:17:48.014731': 1446,
          },
          {
            '2020-05-27 05:17:48.014731': 1966,
          },
          {
            '2020-05-29 05:17:48.014731': 2514,
          },
          {
            '2020-05-31 05:17:48.014731': 860,
          },
          {
            '2020-06-02 05:17:48.014731': 453,
          },
          {
            '2020-06-05 05:17:48.014731': 2580,
          },
          {
            '2020-06-08 05:17:48.014731': 1703,
          },
          {
            '2020-06-10 05:17:48.014731': 92,
          },
          {
            '2020-06-11 05:17:48.014731': 1035,
          },
          {
            '2020-06-14 05:17:48.014731': 1915,
          },
          {
            '2020-06-16 05:17:48.014731': 1793,
          },
          {
            '2020-06-17 05:17:48.014731': 1542,
          },
          {
            '2020-06-20 05:17:48.014731': 1168,
          },
          {
            '2020-06-21 05:17:48.014731': 1765,
          },
          {
            '2020-06-24 05:17:48.014731': 55,
          },
          {
            '2020-06-27 05:17:48.014731': 315,
          },
          {
            '2020-06-29 05:17:48.014731': 307,
          },
          {
            '2020-07-01 05:17:48.014731': 189,
          },
          {
            '2020-07-04 05:17:48.014731': 327,
          },
          {
            '2020-07-07 05:17:48.014731': 823,
          },
          {
            '2020-07-10 05:17:48.014731': 747,
          },
          {
            '2020-07-13 05:17:48.014731': 284,
          },
          {
            '2020-07-14 05:17:48.014731': 832,
          },
          {
            '2020-07-17 05:17:48.014731': 2589,
          },
          {
            '2020-07-18 05:17:48.014731': 730,
          },
          {
            '2020-07-21 05:17:48.014731': 911,
          },
          {
            '2020-07-23 05:17:48.014731': 432,
          },
          {
            '2020-07-24 05:17:48.014731': 748,
          },
          {
            '2020-07-25 05:17:48.014731': 1895,
          },
          {
            '2020-07-28 05:17:48.014731': 616,
          },
          {
            '2020-07-31 05:17:48.014731': 2926,
          },
        ],
      });
    }, 1000);
  });
}

export default getSingleUserData;
