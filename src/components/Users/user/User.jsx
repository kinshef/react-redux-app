import React from 'react';
import s from './User.module.css';
import {NavLink} from "react-router-dom";
import fotoUser from '../../../assets/img/20190911155229-1638.jpg'

let User = ({userData, followingInProgress, getUnFollowUsers, getFollowUsers}) =>
    <div className={s.container}>
        {userData.map(even =>
            <div className={s.form} key={even.id}>
                <div className={s.user}>
                    <NavLink to={`/profile/${even.id}`}>
                        <img alt='' src={even.photos.small ? even.photos.small : fotoUser}/>
                    </NavLink>
                    <p>{even.name}</p>
                    <p>{even.status}</p>
                    {even.followed
                        ? <button disabled={followingInProgress.some(id => id === even.id)}
                                  onClick={() => {getUnFollowUsers(even.id);}}>unFollow</button>
                        : <button disabled={followingInProgress.some(id => id === even.id)}
                                  onClick={() => {getFollowUsers(even.id);}}>Follow</button>}
                </div>
            </div>
        )}
    </div>

export default User;