import React, { useState } from 'react';

import styles from './MapFilter.module.scss';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import CCheckBox from '../../components/Checkbox/CCheckbox';
import DateTimeInput from '../../components/DateTimeInput/DateTimeInput';

const Filter = ({ updateChange, modalChange, initial }) => {
  const [filters, setFilters] = useState(initial);

  const submitChange = () => {
    updateChange(filters);
    modalChange(false);
  };

  const handleChangeCheckbox = (e, name) =>
    setFilters((prev) => ({ ...prev, [name]: e.target.checked }));

  const handleChange = (value, name) =>
    setFilters((prev) => ({ ...prev, [name]: value }));

  return (
    <>
      <div className={styles.rows}>
        <CCheckBox
          handleChange={handleChangeCheckbox}
          name="cdr"
          defaultChecked={true}
        />
        <CCheckBox
          handleChange={handleChangeCheckbox}
          name="ipdr"
          defaultChecked={true}
        />
      </div>

      <div className={styles.rows}>
        <Input
          name="user_id"
          onChange={handleChange}
          title="User ID's"
          placeholder="Enter User Id"
        />
      </div>
      <div className={styles.dual}>
        <DateTimeInput
          name="time_start"
          onChange={handleChange}
          title="Start Time"
          placeholder="Enter Time Start"
        />
        <DateTimeInput
          name="time_end"
          onChange={handleChange}
          title="End Time"
          placeholder="Enter Time End"
        />
      </div>
      <div className={styles.dual}>
        <Button text="Save" onClick={submitChange}></Button>
        <Button text="Cancel" onClick={() => modalChange(false)}></Button>
      </div>
    </>
  );
};

export default Filter;
