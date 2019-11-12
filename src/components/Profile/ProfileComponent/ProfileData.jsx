import React from 'react';
import s from '../Profile.module.css';

let ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
            <p>data</p>
            {Object.keys(profile.contacts).map((p)=>
                <div className={s.soshialwrap}>
                    <p>{p} - </p>
                    <a href={profile.contacts[p]}>{profile.contacts[p] ? profile.contacts[p] : 'не указано'}</a>
                </div>
            )}
            <div><span>обо мне - </span>{profile.aboutMe && <span>{profile.aboutMe}</span>}</div>
            {profile.lookingForAJob === true ? <p> Есть работа</p> : <p> Нет работы</p>}
            <div><span>Описание работы - </span>
            {profile.lookingForAJobDescription
                ? <span>{profile.lookingForAJobDescription}</span>
                : <span>Описание отсутствует</span>}</div>
            <div><span>Полное имя - </span>
            {profile.fullName != null
                ? <span>{profile.fullName}</span>
                : <span>имя отсутствует</span>}</div>
        </div>
    );
};

export default ProfileData;