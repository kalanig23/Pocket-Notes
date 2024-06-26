import React, { useEffect, useState }  from 'react';
import LeftPart from '../component/LeftPart/leftPart';
import styles from './mainPage.module.css';
import RightPart from '../component/rightPart/rightPart';
import Model from '../component/model/model';
import { v4 as uuidv4 } from 'uuid';

const MainPage = () => {
    const [modalOpenCloseFlag, setModalOpenCloseFlag] = useState(false);
    const colorCode = ['#B38BFA', '#FF79F2', '#43E6FC', '#F19576', '#0047FF', '#6691FF'];
    const [groupValue, setGroupValue] = useState({id: '', groupName:'', selectedColorValue: ''});
    const [groupListValue, setGroupListValue] = useState([]);
    const [selectedItemid, setselectedItemid] = useState();
    useEffect(()=>{
        const groupItems = JSON.parse(localStorage.getItem('data'));
        if (groupItems) {
            setGroupListValue(groupItems);
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('data', JSON.stringify(groupListValue));
        setGroupValue({groupName:'', selectedColorValue: ''})
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
        let uniqueId = uuidv4();
        if (groupValue.groupName.length && groupValue.selectedColorValue.length) {
            setGroupListValue((prev)=>[...prev,{...groupValue, id:uniqueId}]);
        } else {
            alert('all filed required!!');
        }
    }

    const showNotesClick = (itemId) => {
        setselectedItemid(itemId);
    }

    return (
        <>
            <div className={styles.mainPages}>
                <div className={styles.leftPart}>
                    <LeftPart
                        groupList = {groupListValue}
                        handleModelOpen={handleModelOpen}
                        showNotesClick={showNotesClick}
                        selectedItemid={selectedItemid}
                    />
                </div>
                <div className={styles.rightPart}>
                    <RightPart
                        selectedItemid={selectedItemid}
                        groupListValueProps={groupListValue}
                    />
                </div>
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