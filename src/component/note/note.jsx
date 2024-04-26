import React from 'react';
import styles from '../rightPart/rightPart.module.css';

const Note = () => {
    return(
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
                </div>
    )
}

export default Note;