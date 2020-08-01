import React from 'react';
import styles from './Filter.module.scss';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';


const Filter = () => {

    const handleChange = () => null;
    const handleToggle = () => null;
    const submitChange = () => null;

    return (
        <>
            <Input
                onChange={handleChange}
                name="title"
                title="Title"
                placeholder="Enter Title"
            />
            <Input
                onChange={handleChange}
                name="width"
                title="Width"
                placeholder="Enter Width"
            />
            <Input
                onChange={handleChange}
                name="height"
                title="Height"
                placeholder="Enter Height"
            />
            <Input
                onChange={handleChange}
                name="xAxis"
                title="X-Axis Label"
                placeholder="Enter Label for X axis"
            />
            <Input
                onChange={handleChange}
                name="yAxis"
                title="Y-Axis Label"
                placeholder="Enter Label for Y axis"
            />
            <div className={styles.buttons}>
                <Button text="Save" onClick={submitChange}></Button>
                <Button text="Cancel" onClick={() => null}></Button>
            </div>
        </>
    );
}
 
export default Filter;