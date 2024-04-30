import React, { useEffect, useState } from 'react';
import styles from '../rightPart/rightPart.module.css';

const Note = ({selectedItemid}) => {
    const noteListData = JSON.parse(localStorage.getItem('noteList'));
    const [noteStateListData, setNoteStateListData] = useState();

    useEffect(() => {
        const filterNoteStateListData = noteListData.filter((data)=>data.groupId == selectedItemid)
        setNoteStateListData(filterNoteStateListData);
    },[]);

    return(
        <div className={styles.noteMessageContainer}>
            {noteStateListData?.map((noteData, index)=>(
                <div className={styles.noteMessage} key={index}>
                    {noteData.message}
                    <div className={styles.messageDateTime}>
                        <span>{noteData.date}</span>
                        <span>{noteData.time}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Note;