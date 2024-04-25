import React, { useEffect, useState } from 'react';
import RightFrontNote from '../../assets/frontnote.svg';
import styles from './rightPart.module.css';
import arraowLeft from '../../assets/arrowsubmit.svg';

const note = [{
    message:'Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their days writing projects, words are already flowing from their fingers.',
    data:'9 Mar 2023',
    time:'10:10 AM'
},{
    message:'Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their days writing projects, words are already flowing from their fingers.',
    data:'9 Mar 2023',
    time:'10:10 AM'
}]

const RightPart = ({selectedGroupValue, handleChangeNoteText, noteMessage, submitNoteMessage, selectedItemid}) => {
    const [groupListValue, setGroupListValue] = useState([]);

    useEffect(()=>{
        const groupItems = JSON.parse(localStorage.getItem('data'));
        if (groupItems) {
            setGroupListValue(groupItems);
        }
    },[])

    return (
        <>
        {   note.length < 0 ?
            <div className={styles.rightEmptyNote}>
                <img src={RightFrontNote}/>
                <h1>Pocket Notes</h1>
                <p>Send and receive messages without keeping your phone online.Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
            </div>
            :
            <>
                <div className={styles.headerContainer}>
                    <div className={styles.headerShortTitle}
                        style={{backgroundColor: selectedGroupValue['selectedColorValue'] && selectedGroupValue['selectedColorValue']}}>
                        {
                            selectedGroupValue['groupName'] && 
                            (selectedGroupValue['groupName'].split(' ')[0][0]
                            +selectedGroupValue['groupName'].split(' ')[1][0])
                            .toUpperCase()
                        }
                    </div>
                    <h4 className={styles.headerTitle}>
                        {selectedGroupValue['groupName']}
                    </h4>
                </div>
                <div className={styles.noteMessageContainer}>
                    <div className={styles.noteMessage}>
                        Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their days writing projects, words are already flowing from their fingers.
                        <div className={styles.messageDateTime}>
                            <span>9 Mar 2023</span>
                            <span>10:10 AM</span>
                        </div>
                    </div>
                    <div className={styles.noteMessage}>
                        Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their days writing projects, words are already flowing from their fingers.
                        <div className={styles.messageDateTime}>
                            <span>9 Mar 2023</span>
                            <span>10:10 AM</span>
                        </div>
                    </div>
                    <div className={styles.noteMessage}>
                        Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their days writing projects, words are already flowing from their fingers.
                        <div className={styles.messageDateTime}>
                            <span>9 Mar 2023</span>
                            <span>10:10 AM</span>
                        </div>
                    </div>
                    <div className={styles.noteMessage}>
                        Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their days writing projects, words are already flowing from their fingers.
                        <div className={styles.messageDateTime}>
                            <span>9 Mar 2023</span>
                            <span>10:10 AM</span>
                        </div>
                    </div>
                    <div className={styles.noteMessage}>
                        Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their days writing projects, words are already flowing from their fingers.\<div className={styles.messageDateTime}>
                            <span>9 Mar 2023</span>
                            <span>10:10 AM</span>
                        </div>
                    </div>
                    <div className={styles.noteMessage}>
                        Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their days writing projects, words are already flowing from their fingers.
                        <div className={styles.messageDateTime}>
                            <span>9 Mar 2023</span>
                            <span>10:10 AM</span>
                        </div>
                    </div>
                    <div className={styles.noteMessage}>
                        Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their days writing projects, words are already flowing from their fingers.
                        <div className={styles.messageDateTime}>
                            <span>9 Mar 2023</span>
                            <span>10:10 AM</span>
                        </div>
                    </div>
                    <div className={styles.noteMessage}>
                        Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their days writing projects, words are already flowing from their fingers.
                        <div className={styles.messageDateTime}>
                            <span>9 Mar 2023</span>
                            <span>10:10 AM</span>
                        </div>
                    </div>
                    <div className={styles.noteMessage}>
                        Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their days writing projects, words are already flowing from their fingers.
                        <div className={styles.messageDateTime}>
                            <span>9 Mar 2023</span>
                            <span>10:10 AM</span>
                        </div>
                    </div>
                </div>
                <div className={styles.notetextAreaMessageContainer}>
                    <textarea className={styles.noteMessageTextArea} type='text' onChange={(e)=>handleChangeNoteText(e)} value={noteMessage}>
                    </textarea>
                    <img src={arraowLeft} alt='submitBtn' className={styles.submitArrow} onClick={()=>submitNoteMessage(noteMessage)}/>
                </div>
            </>
        }
        </>
    )
}

export default RightPart;