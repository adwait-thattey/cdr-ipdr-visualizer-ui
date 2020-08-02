import React from 'react';

import styling from './Marker.module.scss';

const Marker = ({ count, type }) => {
  let s = 100;
  let h = 360;
  let l = 85;

  if (type === 'ipdr') {
    h = 120;
  } else if (type === 'cdr') {
    h = 240;
  }

  if (count > 10) {
    l = 75;
  } else if (l > 100) {
    l = 60;
  } else if (l > 1000) {
    l = 45;
  } else {
    l = 30;
  }

  let color = `hsl(${h}, ${s}%, ${l}%)`;

  return (
    <div className={styling.marker} style={{ backgroundColor: color }}>
      {count}
    </div>
  );
};

export default Marker;
