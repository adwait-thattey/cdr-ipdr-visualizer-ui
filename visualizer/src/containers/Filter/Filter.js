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
                name="latitude"
                title="Latitude"
                placeholder="Enter Latitude"
            />
            <Input
                onChange={handleChange}
                name="longitude"
                title="Longitude"
                placeholder="Enter Longitude"
            />
            <Input
                onChange={handleChange}
                name="start_time"
                title="Start Time"
                placeholder="Enter start time"
            />
            <Input
                onChange={handleChange}
                name="end_time"
                title="End Time"
                placeholder="Enter end time"
            />
            <div className={styles.buttons}>
                <Button text="Save" onClick={submitChange}></Button>
                <Button text="Cancel" onClick={() => null}></Button>
            </div>
        </>
    );
}
 
export default Filter;