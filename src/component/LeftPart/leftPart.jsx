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
                            <div className={styles.itemShortTitle} style={{backgroundColor: item.selectedColorValue}}>{(item.groupName.split(' ')[0][0]+item.groupName.split(' ')[1][0]).toUpperCase()}</div>
                            <h4 className={styles.itemTitle}>{item.groupName.charAt(0).toUpperCase() + item.groupName.slice(1)}</h4>
                        </div>
                    ))}
                </div>
                <GroupButton handleModelOpen={handleModelOpen} handleModelOpens={handleModelOpen}/>
            </div>
        </>
    )
}

export default LeftPart;