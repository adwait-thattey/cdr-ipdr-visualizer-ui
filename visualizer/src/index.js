import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

import Map from './components/Map/Map';

import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
    <Map points={} />
  </React.StrictMode>,
  document.getElementById('root'),
);
