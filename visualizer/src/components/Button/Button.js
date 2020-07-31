import React from 'react';
import styles from './Button.module.scss';

const Button = ({ text, onClick }) => {
    return (
        <div className={styles.buttonWrapper}>
            <button onClick={onClick} className={styles.button}>{text}</button>
        </div>
    )
}

export default Button;