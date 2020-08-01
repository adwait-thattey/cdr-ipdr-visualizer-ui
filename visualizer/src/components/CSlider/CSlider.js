import React from 'react';
import { Slider } from 'antd';

const CSlider = ({ onChange, name, ...props }) => {

    const handleChange = (value) => {
        onChange(value, name)
    }

    return (  
        <Slider defaultValue={[20, 50]} onChange={handleChange} { ...props } />
    );
}
 
export default CSlider;