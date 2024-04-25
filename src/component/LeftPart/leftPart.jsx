import React from 'react';
import styles from './leftPart.module.css';
import GroupButton from '../groupBtn/groupBtn';

const LeftPart = ({groupList, handleModelOpen, showNotesClick, selectedItemid}) => {
    return (
        <>
            <h3 className={styles.projectTitle}>Pocket Notes</h3>
            <div className={styles.btnCard}>
                <div className={styles.notesCard}>
                    {groupList.map((item, index) => (
                        <div
                            key={item.id}
                            className={styles.pocketContainer}
                            onClick={()=>showNotesClick(item.id)}
                            style={{backgroundColor : selectedItemid==item.id ? '#2F2F2F': 'white'}}
                        >
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