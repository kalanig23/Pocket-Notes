import React from 'react';
import styles from './groupBtn.module.css';
import plusIcon from '../../assets/plus.svg';

const GroupButton = () => {
    return (
        <>
            <button className={styles.groupBtn}>
                <img src={plusIcon}/>
            </button>
        </>
    )
}

export default GroupButton;