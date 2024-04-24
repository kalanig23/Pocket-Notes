import React from 'react';
import RightFrontNote from '../../assets/frontnote.svg';
import styles from './rightPart.module.css';

const RightPart = () => {
    return (
        <>
            <div className={styles.rightEmptyNote}>
                <img src={RightFrontNote}/>
                <h1>Pocket Notes</h1>
                <p>Send and receive messages without keeping your phone online.Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
            </div>
        </>
    )
}

export default RightPart;