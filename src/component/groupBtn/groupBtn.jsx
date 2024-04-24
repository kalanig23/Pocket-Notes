import React from 'react';
import styles from './groupBtn.module.css';
import plusIcon from '../../assets/plus.svg';

const GroupButton = ({handleModelOpens}) => {
    return (
        <>
            <button className={styles.groupBtn} onClick={handleModelOpens}>
                <img src={plusIcon}/>
            </button>
        </>
    )
}

export default GroupButton;