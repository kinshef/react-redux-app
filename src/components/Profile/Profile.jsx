import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader";
import fotoUser from "../../assets/img/20190911155229-1638.jpg";
// import ProfileStatus from "./ProfileStatus";
import ProfileStatusHuck from "./ProfileStatusHuck";

let Profile = (props) => {

    if(!props.profile){
        return <Preloader />
    }

    const mainPhotoSelected = (even) => {
        if (even.target.files.length) {
            props.savePhoto(even.target.files[0])
        }
    }

    return (
        <div className={s.Profile}>
            <h5>Profile</h5>
            <img src={props.profile.photos.large != null ? props.profile.photos.large : fotoUser}/>
            {props.isOwner && <input type="file" onChange={mainPhotoSelected}/>}
            <ProfileStatusHuck updateUsersStatus={props.updateUsersStatus} status={props.status} />
            {Object.keys(props.profile.contacts).map((p)=>
                props.profile.contacts[p] &&
                <div className={s.soshialwrap}>
                    <p>{p} - </p>
                    <a href={props.profile.contacts[p]}>{props.profile.contacts[p]}</a>
                </div>
            )}
            {props.profile.aboutMe != null && <p> Статус - {props.profile.aboutMe}</p>}
            {props.profile.lookingForAJob === true ? <p> Есть работа</p> : <p> Нет работы</p>}
            {props.profile.lookingForAJobDescription != null && <p> Описание работы - {props.profile.lookingForAJobDescription}</p>}
            {props.profile.fullName != null && <p> Полное имя - {props.profile.fullName}</p>}
            <MyPostsContainer />
        </div>
    );
};

export default Profile;