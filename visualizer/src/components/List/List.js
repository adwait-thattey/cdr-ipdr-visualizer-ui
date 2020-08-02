import React from 'react';

const ListItem = ({ key, value }) => {
  return (
    <div>
      <div>{key}</div>
      <div>{value}</div>
    </div>
  );
};

export default ListItem;
