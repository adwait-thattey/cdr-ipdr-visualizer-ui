import React, { useState, useMemo, useEffect } from 'react';

import styles from './UsersTable.module.scss';

import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

import { dateTimeString } from '../../services/dateUtils';

const UsersTable = ({ data }) => {
  const [sort, reSort] = useState('i');

  const dataCopy = useMemo(() => {
    return [...data];
  }, [data]);

  const sortedData = useMemo(() => {
    if (sort === 'ff') {
      return dataCopy.sort((a, b) => {
        return a.total_times - b.total_times;
      });
    } else if (sort === 'df') {
      return dataCopy.sort((a, b) => {
        return a.total_duration - b.total_duration;
      });
    } else if (sort === 'fr') {
      return dataCopy.sort((a, b) => {
        return b.total_times - a.total_times;
      });
    } else if (sort === 'dr') {
      return dataCopy.sort((a, b) => {
        return b.total_duration - a.total_duration;
      });
    } else if (sort === 'lf') {
      return dataCopy.sort((a, b) => {
        return Date.parse(a.last_called) - Date.parse(b.last_called);
      });
    } else if (sort === 'lr') {
      return dataCopy.sort((a, b) => {
        return Date.parse(b.last_called) - Date.parse(a.last_called);
      });
    } else {
      return data;
    }
  }, [data, sort]);

  const handleChange = (t) => {
    if (sort === 'i' || sort[0] !== t) {
      reSort(t + 'f');
    } else {
      if (sort[1] === 'f') {
        reSort(t + 'r');
      } else {
        reSort('i');
      }
    }
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.tr}>
          <th className={styles.th}>
            <div className={styles.heading}>Name</div>
          </th>
          <th className={styles.th}>
            <div className={styles.button} onClick={() => handleChange('d')}>
              Total Duration
              {(sort === 'df' && <AiFillCaretUp />) ||
                (sort === 'dr' && <AiFillCaretDown />) ||
                ' '}
            </div>
          </th>
          <th className={styles.th}>
            <div className={styles.button} onClick={() => handleChange('f')}>
              Total Times
              {(sort === 'ff' && <AiFillCaretUp />) ||
                (sort === 'fr' && <AiFillCaretDown />) ||
                ' '}
            </div>
          </th>
          <th className={styles.th}>
            <div className={styles.button} onClick={() => handleChange('l')}>
              Last Called
              {(sort === 'lf' && <AiFillCaretUp />) ||
                (sort === 'lr' && <AiFillCaretDown />) ||
                ' '}
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((val, index) => (
          <tr className={styles.tr} key={index}>
            <td className={styles.td}>{val.name}</td>
            <td className={styles.td}>{val.total_duration}</td>
            <td className={styles.td}>{val.total_times}</td>
            <td className={styles.td}>{dateTimeString(val.last_called)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
