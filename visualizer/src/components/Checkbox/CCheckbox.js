import React from 'react';
import { Checkbox } from "antd";

const CCheckBox = ({ name, handleChange, defaultChecked }) => {
    return (  
        <Checkbox defaultChecked={defaultChecked} onChange={(e) => handleChange(e, name)}>{name}</Checkbox>
    );
}
 
export default CCheckBox;