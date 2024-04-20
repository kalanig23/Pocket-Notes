import React from 'react';
import LeftPart from '../component/LeftPart/leftPart';
import styles from './mainPage.module.css';

const groupList = [
    {   
        id:1,
        shortTitleIcon: 'MN',
        title: 'My Notes'
    },
    {   
        id:2,
        shortTitleIcon: 'MP',
        title: 'My personal grp'
    },
    {   
        id:3,
        shortTitleIcon: 'JG',
        title: 'Javascript grp'
    },
];

const MainPage = () => {
    return (
       <>
            <div className={styles.leftPart}><LeftPart groupList = {groupList} /></div>
            <div></div>
       </>
    )
}

export default MainPage;