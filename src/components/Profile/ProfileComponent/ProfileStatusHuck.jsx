import React, {useState, useEffect} from 'react';

const ProfileStatusHuck = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, getStatus] = useState(props.status);

    const activateEditMode = () => {
        if(props.isOwner){
            setEditMode(true)
        }
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUsersStatus(status)
    }

    const onStatusChange = (even) => {
        getStatus(even.target.value)
    }

    useEffect( () => {
        getStatus(props.status)
    }, [props.status])

    return (
        <div>
            <span>Статус - </span>
            {editMode
                ? <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                         value={status}/>
                : <span onDoubleClick={activateEditMode}>{props.status || '---'}</span>}
        </div>
    )
}

export default ProfileStatusHuck;