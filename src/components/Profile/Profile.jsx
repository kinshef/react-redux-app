import React, {useState} from 'react';
import s from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader";
import fotoUser from "../../assets/img/20190911155229-1638.jpg";
// import ProfileStatus from "./ProfileStatus";
import ProfileStatusHuck from "./ProfileComponent/ProfileStatusHuck";
import ProfileData from "./ProfileComponent/ProfileData";
import ProfileForm from "./ProfileComponent/ProfileForm";

let Profile = (props) => {
    const [editMode, setEditMode] = useState(false);

    if(!props.profile){
        return <Preloader />
    }

    const mainPhotoSelected = (even) => {
        if (even.target.files.length) {
            props.savePhoto(even.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData)
        // .then(() => {setEditMode(false)})
        if (props.profileUpdateStatus) {
            setEditMode(false)
        }
    }

    return (
        <div className={s.Profile}>
            <h5>Profile</h5>
            <img src={props.profile.photos.large !== null ? props.profile.photos.large : fotoUser}/>
            {props.isOwner && <input type="file" onChange={mainPhotoSelected}/>}
            <ProfileStatusHuck updateUsersStatus={props.updateUsersStatus} status={props.status} />
            { editMode
                ? <ProfileForm profileUpdateStatus={props.profileUpdateStatus} onSubmit={onSubmit} initialValues={props.profile} profile={props.profile}/>
                : <ProfileData isOwner={props.isOwner} goToEditMode={() => {setEditMode(true)}} profile={props.profile}/>}
            <MyPostsContainer />
        </div>
    );
};



export default Profile;