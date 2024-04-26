import React, { useEffect, useState } from 'react';
import RightFrontNote from '../../assets/frontnote.svg';
import styles from './rightPart.module.css';
import arraowLeft from '../../assets/arrowsubmit.svg';
import Note from '../note/note';

const RightPart = ({ groupListValueProps, selectedItemid}) => {
    const [groupListValue, setGroupListValue] = useState([]);
    const [ids, setIds] = useState();
    const [noteMessage, setNoteMessage] = useState('');
    const [noteList, setNoteList] = useState([]);

    useEffect(()=>{
        if(selectedItemid === ids) {
            setGroupListValue(groupListValueProps);
            setIds(selectedItemid);
        } else {
            setGroupListValue(groupListValueProps.filter((groupListValueItem)=> groupListValueItem.id===selectedItemid));
            setIds(selectedItemid)
        }
    },[groupListValueProps, selectedItemid])
    
    useEffect(()=> {
        console.log('noteList:',noteList)
    },[noteList])
    
    const submitNoteMessage = () => {
        if (noteMessage.length) {
            let object = {message: noteMessage, date: dateFormate(), time:timeFormat()}
            setNoteList([...noteList, object]);
            setNoteMessage('')
        } else {
            alert('message is empty!!');
        }
    }

    function dateFormate () {
        var currentDate = new Date();
        var day = currentDate.getDate();
        var month = currentDate.toLocaleString('default', { month: 'short' });
        var year = currentDate.getFullYear();
        var formattedDate = day + ' ' + month + ' ' + year;
        return formattedDate;
    }

    function timeFormat() {
        var currentTime = new Date();
        var formattedTime = currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        return formattedTime;
    }

    return (
        <>
        {   groupListValue.length ?
            <>
                <div className={styles.headerContainer}>
                    <div className={styles.headerShortTitle}
                        style={{backgroundColor: groupListValue[0]['selectedColorValue'] && groupListValue[0]['selectedColorValue']}}>
                        {
                            groupListValue[0]['groupName'] && 
                            (groupListValue[0]['groupName'].split(' ')[0][0]
                            +groupListValue[0]['groupName'].split(' ')[1][0])
                            .toUpperCase()
                        }
                    </div>
                    <h4 className={styles.headerTitle}>
                        {groupListValue[0]['groupName']}
                    </h4>
                </div>
                <Note/>
                <div 
                    className={styles.notetextAreaMessageContainer}>
                    <textarea
                        className={styles.noteMessageTextArea}
                        type='text'
                        onChange={(e)=>setNoteMessage(e.target.value)}
                        value={noteMessage}
                    >
                    </textarea>
                    <img
                        src={arraowLeft} 
                        alt='submitBtn' 
                        className={styles.submitArrow} 
                        onClick={submitNoteMessage}
                    />
                </div>
            </>
            :
            <div className={styles.rightEmptyNote}>
                <img src={RightFrontNote}/>
                <h1>Pocket Notes</h1>
                <p>Send and receive messages without keeping your phone online.Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
            </div>
        }
        </>
    )
}

export default RightPart;