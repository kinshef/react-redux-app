import React from 'react';
import style from './Post.module.css';
import fotoUser from '../../../../assets/img/logo192.png'

let MyPosts = ({massage, laick}) => {
    return (
        <div className={style.post}>
            <img alt='' src={fotoUser}/>
            <p>{massage}</p>
            <span>laick {laick}</span>
        </div>
    );
}

export default MyPosts;