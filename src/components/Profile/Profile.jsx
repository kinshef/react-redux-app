import React, {useState, useEffect} from 'react';
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

    const onSubmit = (formData) => {
        props.saveProfile(formData)
        // .then(() => {setEditMode(false)})
        if (props.profileUpdateStatus) {
            setEditMode(false)
        }
    }

    useEffect( () => {
        setEditMode(false)
    }, [props.profileUpdateStatus && editMode])

    if(!props.profile){
        return <Preloader />
    }

    const mainPhotoSelected = (even) => {
        if (even.target.files.length) {
            props.savePhoto(even.target.files[0])
        }
    }

    const updateStatus = () => {
        setEditMode(true)
        props.setProfileUpdateStatus(false)
    }

    return (
        <div className={s.Profile}>
            <h5>Profile</h5>
            <img src={props.profile.photos.large !== null ? props.profile.photos.large : fotoUser}/>
            {props.isOwner && <input type="file" onChange={mainPhotoSelected}/>}
            <ProfileStatusHuck isOwner={props.isOwner} updateUsersStatus={props.updateUsersStatus} status={props.status} />
            {editMode
                ? <ProfileForm profileUpdateStatus={props.profileUpdateStatus} onSubmit={onSubmit} initialValues={props.profile} profile={props.profile}/>
                : <ProfileData isOwner={props.isOwner} goToEditMode={updateStatus} profile={props.profile}/>}
            <MyPostsContainer />
        </div>
    );
};

export default Profile;