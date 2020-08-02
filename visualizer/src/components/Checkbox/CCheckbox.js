import React from 'react';
import { Checkbox } from "antd";

const CCheckBox = ({ name, handleChange, checked }) => {
    return (  
        <Checkbox checked={checked} onChange={(e) => handleChange(e, name)}>{name}</Checkbox>
    );
}
 
export default CCheckBox;