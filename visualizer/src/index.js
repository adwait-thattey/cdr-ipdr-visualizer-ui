import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

import 'antd/dist/antd.css';

import Charts from './components/Charts/UsageChart';

import Chart from './components/Charts/ServicesChart';

const series = [1, 4, 6, 7, 6, 8, 9];
const data = [
  '2020-11-10',
  '2020-11-09',
  '2020-08-01',
  '2020-01-19',
  '2019-12-11',
  '2019-10-10',
  '2018-11-19',
];

const cdr = [0, 1, 2, 3, 4, 5, 6].map((i) => {
  return { date: data[i], total_time: series[i] };
});

const ipdr = [0, 1, 2, 3, 4, 5, 6].map((i) => {
  return { date: data[i], total_data: series[i] };
});

const service = [0, 1, 2, 3, 4, 5, 6].map((i) => {
  return {
    name: data[i],
    total_times: series[i],
    total_data: series[7 - i - 1],
  };
});

ReactDOM.render(
  <Chart ipdr={ipdr} cdr={cdr} data={service} />,
  document.getElementById('root'),
);
