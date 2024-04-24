import React, { useState } from 'react';
import styles from './model.module.css';

const Model = ({handleModelClose,colorCode, groupValue, handleGroupNameChange, handleSubmitCreateGroup, handleSelectColor}) => {
    return (
        <div id="myModal" className={styles.modal}>
        <div className={styles.modalContent}>
            <span className={styles.close} onClick={handleModelClose}>&times;</span>
            <p>Create New group</p>
            <form>
                <div>
                    <label>Group Name</label>
                    <input
                        type='text'
                        name='group_name'
                        value={groupValue.groupName}
                        placeholder='Enter group name'
                        onChange={(e)=>{handleGroupNameChange(e)}}
                    />
                </div>
                <div>
                    <label>Choose colour</label>
                    {colorCode.map((colorCodeValue, index)=>(
                        <button
                            key={index}
                            style={{backgroundColor: colorCodeValue, border: colorCodeValue, color: colorCodeValue}}
                            className={styles.groupColor}
                            value={colorCodeValue}
                            name='choose_colour'
                            onClick={(e)=>handleSelectColor(e)}
                        ></button>
                    ))}
                </div>
                <button className={styles.createGroupBtn} onClick={(event)=>handleSubmitCreateGroup(event)}>Create</button>
            </form>
        </div>
        </div>
    )
}

export default Model;