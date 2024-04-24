import React, { useEffect, useState }  from 'react';
import LeftPart from '../component/LeftPart/leftPart';
import styles from './mainPage.module.css';
import RightPart from '../component/rightPart/rightPart';
import Model from '../component/model/model';

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
    const [modalOpenCloseFlag, setModalOpenCloseFlag] = useState(false);
    const colorCode = ['#B38BFA', '#FF79F2', '#43E6FC', '#F19576', '#0047FF', '#6691FF'];
    const [groupValue, setGroupValue] = useState({groupName:'', selectedColorValue: ''});
    const [groupListValue, setGroupListValue] = useState([]);
    
    useEffect(()=>{
        localStorage.setItem('data', JSON.stringify(groupListValue));
    },[groupListValue])

    const handleModelOpen =() =>{
        setModalOpenCloseFlag(true);
    }

    const handleModelClose = () => {
        setModalOpenCloseFlag(false);
    }

    const handleGroupNameChange = (e) => {
        setGroupValue({...groupValue, groupName: e.target.value});
    }

    const handleSelectColor = (e) => {
        e.preventDefault();
        setGroupValue({...groupValue, selectedColorValue: e.target.value});
    }

    const handleSubmitCreateGroup = (event) => {
        event.preventDefault();
        setGroupListValue((prev)=>[...prev,groupValue]);
    }

    return (
        <>
            <div className={styles.mainPages}>
                <div className={styles.leftPart}><LeftPart groupList = {groupList} handleModelOpen={handleModelOpen}/></div>
                <div className={styles.rightPart}><RightPart /></div>
            </div>
            {modalOpenCloseFlag &&
                <Model
                    handleModelClose={handleModelClose}
                    handleSubmitCreateGroup={handleSubmitCreateGroup}
                    colorCode={colorCode}
                    groupValue={groupValue}
                    setGroupValue={setGroupValue}
                    handleSelectColor={handleSelectColor}
                    handleGroupNameChange={handleGroupNameChange}
                />
            }
        </>
    )
}

export default MainPage;