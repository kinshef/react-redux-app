import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


let DialogItems = (props) => {
    return (
        <li><NavLink to={`/message/${props.id}`}>{props.user}</NavLink></li>
    )
}

export default DialogItems;