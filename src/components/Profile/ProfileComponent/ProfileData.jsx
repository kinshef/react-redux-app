import React from 'react';
import style from '../Profile.module.css';

let ProfileData = ({profile: {contacts, aboutMe, lookingForAJob, lookingForAJobDescription, fullName}, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
            {Object.keys(contacts).map((p)=>
                <div key={p} className={style.soshialwrap}>
                    <p>{p} - </p>
                    <a href={contacts[p]}>{contacts[p] ? contacts[p] : 'не указано'}</a>
                </div>
            )}
            <div><span>обо мне - </span>{aboutMe && <span>{aboutMe}</span>}</div>
            {lookingForAJob === true ? <p> Есть работа</p> : <p> Нет работы</p>}
            <div><span>Описание работы - </span>
            {lookingForAJobDescription
                ? <span>{lookingForAJobDescription}</span>
                : <span>Описание отсутствует</span>}</div>
            <div><span>Полное имя - </span>
            {fullName != null
                ? <span>{fullName}</span>
                : <span>имя отсутствует</span>}</div>
        </div>
    );
};

export default ProfileData;