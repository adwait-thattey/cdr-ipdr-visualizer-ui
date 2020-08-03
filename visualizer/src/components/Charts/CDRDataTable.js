import React, { useState, useMemo } from 'react';

import styles from './Table.module.scss';

import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

import { dateTimeString } from '../../services/dateUtils';

const CDRDataTable = ({ data }) => {
  const [sort, reSort] = useState('i');

  const dataCopy = useMemo(() => {
    return [...data];
  }, [data]);

  const sortedData = useMemo(() => {
    if (sort === 'df') {
      return dataCopy.sort((a, b) => {
        return a.duration - b.duration;
      });
    } else if (sort === 'dr') {
      return dataCopy.sort((a, b) => {
        return b.duration - a.duration;
      });
    } else if (sort === 'lf') {
      return dataCopy.sort((a, b) => {
        return Date.parse(a.timestamp) - Date.parse(b.timestamp);
      });
    } else if (sort === 'lr') {
      return dataCopy.sort((a, b) => {
        return Date.parse(b.timestamp) - Date.parse(a.timestamp);
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
            <div className={styles.heading}>From</div>
          </th>
          <th className={styles.th}>
            <div className={styles.heading}>To</div>
          </th>
          <th className={styles.th + ' ' + styles.th_button}>
            <div className={styles.button} onClick={() => handleChange('d')}>
              Duration
              {(sort === 'df' && <AiFillCaretUp />) ||
                (sort === 'dr' && <AiFillCaretDown />) ||
                ' '}
            </div>
          </th>
          <th className={styles.th + ' ' + styles.th_button}>
            <div className={styles.button} onClick={() => handleChange('l')}>
              Date
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
            <td className={styles.td}>{val.from_number}</td>
            <td className={styles.td}>{val.to_number}</td>
            <td className={styles.td}>{val.duration}</td>
            <td className={styles.td}>{dateTimeString(val.timestamp)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CDRDataTable;
