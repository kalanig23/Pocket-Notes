import React, { useEffect, useState, useContext } from 'react';
import RightFrontNote from '../../assets/frontnote.svg';
import styles from './rightPart.module.css';
import arraowLeft from '../../assets/arrowsubmit.svg';
import Note from '../note/note';
import lock from '../../assets/lock.svg';
import {NoteListContext} from '../../App';

const RightPart = ({ groupListValueProps, selectedItemid}) => {
    const {noteLists, setNoteLists} = useContext(NoteListContext);
    console.log('data', noteLists);
    const [groupListValue, setGroupListValue] = useState([]);
    const [ids, setIds] = useState();
    const [noteMessage, setNoteMessage] = useState('');
    // const [noteList, setNoteList] = useState([]);

    useEffect(()=>{
        const value = JSON.parse(localStorage.getItem('noteList'));
        setNoteLists([...value]);
    },[])

    useEffect(()=>{
        if(selectedItemid === ids) {
            setGroupListValue(groupListValueProps);
            setIds(groupListValueProps[0]?.id);
        } else {
            setGroupListValue(groupListValueProps.filter((groupListValueItem)=> groupListValueItem.id===selectedItemid));
            setIds(selectedItemid)
        }
    },[groupListValueProps, selectedItemid])
    
    const submitNoteMessage = () => {
        if (noteMessage.length) {
            let object = {message: noteMessage, date: dateFormate(), time:timeFormat(), groupId: ids}
            setNoteLists((noteLists)=>[...noteLists, object]);
            setNoteMessage('')
        } else {
            alert('message is empty!!');
        }
    }

    useEffect(() => {
        if (noteLists.length !== 0 && noteLists !== undefined) {
            try {
                localStorage.setItem('noteLists', JSON.stringify(noteLists));
            } catch (error) {
                console.error('Error storing noteLists in localStorage:', error);
            }
        }
    }, [noteLists]);

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
                        style={{backgroundColor: groupListValue[0]?.['selectedColorValue'] && groupListValue[0]?.['selectedColorValue']}}>
                        {
                            groupListValue[0]?.['groupName'] && (groupListValue[0]?.['groupName'].split(' ')[0][0]+groupListValue[0]?.['groupName'].split(' ')[1][0]).toUpperCase()
                        }
                    </div>
                    <h4 className={styles.headerTitle}>
                        {groupListValue[0]?.['groupName'].charAt(0).toUpperCase() + groupListValue[0]?.['groupName'].slice(1)}
                    </h4>
                </div>
                <Note selectedItemid={ids} />
                <div 
                    className={styles.notetextAreaMessageContainer}>
                    <textarea
                        className={styles.noteMessageTextArea}
                        type='text'
                        onChange={(e)=>setNoteMessage(e.target.value)}
                        value={noteMessage}
                    >
                    </textarea>
                    <div className={styles.submitArrow} >
                        <img
                            src={arraowLeft} 
                            alt='submitBtn' 
                            onClick={submitNoteMessage}
                        />
                    </div>
                </div>
            </>
            :
            <div className={styles.rightEmptyNote}>
                <img src={RightFrontNote}/>
                <h1>Pocket Notes</h1>
                <span>Send and receive messages without keeping your phone online.</span>
                <span>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</span>
                <div style={{bottom: '0', display: 'flex', position: 'absolute', marginBottom: '25px'}}><img src={lock} alt='lock'/><span style={{verticalAlign: 'top', marginLeft:'10px', marginTop: '3px' }}>end-to-end encrypted</span></div>
            </div>
        }
        </>
    )
}

export default RightPart;