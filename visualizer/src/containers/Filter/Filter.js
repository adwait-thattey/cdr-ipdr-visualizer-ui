import React, { useState } from 'react';
import styles from './Filter.module.scss';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import CCheckBox from '../../components/Checkbox/CCheckbox';
import CSlider from '../../components/CSlider/CSlider';
import DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css";

const initialFilters = {
    cdr: true,
    ipdr: true,
    

    location_lat: null,
    location_long: null,
    location_radius: null,


    time_start: new Date().getDate() + 1,
    time_end: null,


    duration_min: null,
    duration_max: null,

    
    frequency_min: null,
    frequency_max: null,


    phone_number: null,
    exclude_these_phone_number: false,


    user_id: null,
    exclude_these_user_id: false,

    cell_id: null,
    exclude_these_cell_id: false
}

const Filter = ({ updateChange, modalChange }) => {

    const [filters, setFilters] = useState(initialFilters);

    const submitChange = () => {
        const phone_number = filters.phone_number && filters.phone_number.split(',');
        const updatedFilters = { ...filters, phone_number: phone_number }
        updateChange(updatedFilters);
        modalChange(false)
    };

    const handleChangeCheckbox = (e, name) => setFilters((prev) => ({ ...prev, [name]: e.target.checked }))

    const handleChange = (value, name) => setFilters((prev) => ({ ...prev, [name]: value }))

    const handleDoubleSliderChange = (value, name) => {

        const minV = name + "_min";
        const maxV = name + "_max";

        setFilters((prev) => ({ ...prev, [minV]: value[0], [maxV]: value[1] }))
    }

    const handleSliderChange = (value, name) => setFilters((prev) => ({ ...prev, [name]: value }))

    const handleDateChange = (value) => {
        setFilters(prev => ({ ...prev, time_start: value[0], time_end: value[1] }))
    };

    const { location_lat, location_long, time_start, time_end } = filters;

    return (
        <>
            <div className={`${styles.rows} ${styles.checkbox}`}>
                <CCheckBox handleChange={handleChangeCheckbox} name="cdr" checked={filters.cdr}/>
                <CCheckBox handleChange={handleChangeCheckbox} name="ipdr" checked={filters.ipdr}/>
            </div>
            <div className={styles.dual}>
                <Input
                    onChange={handleChange}
                    name="location_lat"
                    title="Latitude"
                    placeholder="Enter Latitude"
                />
                <Input
                    onChange={handleChange}
                    name="location_long"
                    title="Longitude"
                    placeholder="Enter Longitude"
                />
            </div>
            <div className={styles.rows}>
                <h5>Radius</h5>
                <CSlider onChange={handleSliderChange} name="location_radius" defaultValue={30} disabled={!location_lat || !location_long}/>
            </div>
            <div className={styles.rows}>
                <h5>Call Duration (in minutes)</h5>
                <CSlider range defaultValue={[5, 20]} name="duration" onChange={handleDoubleSliderChange} />
            </div>
            <div className={styles.rows}>
                <h5>Frequency</h5>
                <CSlider range defaultValue={[20, 50]} name="frequency" onChange={handleDoubleSliderChange} />
            </div>
            <div className={styles.rows}>
                <Input name="phone_number" onChange={handleChange} title="Phone numbers" placeholder="Enter comma seperated phone numbers"/>
                <CCheckBox checked={filters.exclude_these_phone_number} handleChange={handleChangeCheckbox} name="exclude_these_phone_number" defaultChecked={false}/>
            </div>
            <div className={styles.rows}>
                <Input name="user_id" onChange={handleChange} title="User ID's" placeholder="Enter comma seperated user id's"/>
                <CCheckBox checked={filters.exclude_these_user_id} handleChange={handleChangeCheckbox} name="exclude_these_user_id" defaultChecked={false}/>
            </div>
            <div className={styles.rows}>
                <Input name="cell_id" onChange={handleChange} title="Cell ID's" placeholder="Enter comma seperated cell id's"/>
                <CCheckBox checked={filters.exclude_these_cell_id} handleChange={handleChangeCheckbox} name="exclude_these_cell_id" defaultChecked={false}/>
            </div>
            <div className={styles.rows}>
                <h5>Date Range</h5>
                <DatePicker
                    selected={time_start}
                    onChange={handleDateChange}
                    startDate={time_start}
                    endDate={time_end}
                    selectsRange
                    inline
                />
            </div>
            <div className={styles.dual}>
                <Button text="Save" onClick={submitChange}></Button>
                <Button text="Cancel" onClick={() => modalChange(false)}></Button>
            </div>
        </>
    );
}
 
export default Filter;