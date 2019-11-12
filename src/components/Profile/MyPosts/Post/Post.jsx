import React from 'react';
import s from './Post.module.css';
import fotoUser from '../../../../assets/img/logo192.png'

let MyPosts = (props) => {
    return (
        <div className={s.post}>
            <img src={fotoUser}/>
            <p>{props.massage}</p>
            <span>laick {props.laick}</span>
        </div>
    );
}

export default MyPosts;