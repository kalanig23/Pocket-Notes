import React, { useContext, useEffect } from 'react';
import styles from '../rightPart/rightPart.module.css';
import {NoteListContext} from '../../App';

const Note = ({selectedItemid}) => {
    const {noteLists, setNoteLists} = useContext(NoteListContext);

    return(
        <div className={styles.noteMessageContainer}>
            {noteLists.filter((d)=>d.groupId==selectedItemid)?.map((noteData, index)=>(
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