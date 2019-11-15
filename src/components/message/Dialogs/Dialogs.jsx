import React from 'react';
// import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


let DialogItems = ({id, user}) => {
    return (
        <li><NavLink to={`/message/${id}`}>{user}</NavLink></li>
    )
}

export default DialogItems;