import React from 'react';
import styles from './Circle.module.scss';

const Circle = ({ color }) => {

    return (  
        <div className={styles.circle} style={{ backgroundColor: color }}></div>
    );
}
 
export default Circle;