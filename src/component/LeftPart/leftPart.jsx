import React from 'react';
import styles from './leftPart.module.css';

const LeftPart = ({groupList}) => {
    return (
        <>
            <h3 className={styles.projectTitle}>Pocket Notes</h3>
            <div className={styles.notesCard}>
                {groupList.map((item, index) => (
                    <div key={index} className={styles.pocketContainer}>
                        <div className={styles.itemShortTitle}>{(item.title.split(' ')[0][0]+item.title.split(' ')[1][0]).toUpperCase()}</div>
                        <h4 className={styles.itemTitle}>{item.title}</h4>
                    </div>
                ))}
            </div>
        </>
    )
}

export default LeftPart;