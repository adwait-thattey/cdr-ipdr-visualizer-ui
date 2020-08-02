import React from 'react';
import { Checkbox } from 'antd';

const CCheckBox = ({ name, handleChange, checked, defaultChecked }) => {
  return (
    <Checkbox
      checked={checked}
      defaultChecked={defaultChecked}
      onChange={(e) => handleChange(e, name)}
    >
      {name}
    </Checkbox>
  );
};

export default CCheckBox;
