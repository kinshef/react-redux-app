import React from 'react';
import s from './Messages.module.css';


let Messages = (props) => {
    return (
        <p>{props.messages}</p>
    );
}

export default Messages;