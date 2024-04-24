import React from 'react';
import styles from './leftPart.module.css';
import GroupButton from '../groupBtn/groupBtn';

const LeftPart = ({groupList, handleModelOpen}) => {
    return (
        <>
            <h3 className={styles.projectTitle}>Pocket Notes</h3>
            <div className={styles.btnCard}>
                <div className={styles.notesCard}>
                    {groupList.map((item, index) => (
                        <div key={index} className={styles.pocketContainer}>
                            <div className={styles.itemShortTitle}>{(item.title.split(' ')[0][0]+item.title.split(' ')[1][0]).toUpperCase()}</div>
                            <h4 className={styles.itemTitle}>{item.title}</h4>
                        </div>
                    ))}
                </div>
                <GroupButton handleModelOpen={handleModelOpen} handleModelOpens={handleModelOpen}/>
            </div>
        </>
    )
}

export default LeftPart;