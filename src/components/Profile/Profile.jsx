import React, {useState, useEffect} from 'react';
import style from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader";
import fotoUser from "../../assets/img/20190911155229-1638.jpg";
import ProfileData from "./ProfileComponent/ProfileData";
import ProfileForm from "./ProfileComponent/ProfileForm";
import ProfileStatusHuck from "./ProfileComponent/ProfileStatusHuck";
// import ProfileStatus from "./ProfileStatus";

let Profile = ({isOwner, status, savePhoto, updateUsersStatus, setProfileUpdateStatus, profile, profileUpdateStatus, saveProfile}) => {
    const [editMode, setEditMode] = useState(false);
    useEffect( () => {
        setEditMode(false)
    }, [profileUpdateStatus && editMode]);

    const onSubmit = (formData) => {
        saveProfile(formData);
        // .then(() => {setEditMode(false)})
        if (profileUpdateStatus) {
            setEditMode(false)
        }
    }

    if(!profile){
        return <Preloader />
    }

    const mainPhotoSelected = (even) => {
        if (even.target.files.length) {
            savePhoto(even.target.files[0])
        }
    };

    const updateStatus = () => {
        setEditMode(true);
        setProfileUpdateStatus(false)
    };

    return (
        <div className={style.Profile}>
            <h5>Profile</h5>
            <img alt='' src={profile.photos.large !== null ? profile.photos.large : fotoUser}/>
            {isOwner && <input type="file" onChange={mainPhotoSelected}/>}
            <ProfileStatusHuck isOwner={isOwner} updateUsersStatus={updateUsersStatus} status={status} />
            {editMode
                ? <ProfileForm initialValues={profile}
                               profileUpdateStatus={profileUpdateStatus}
                               onSubmit={onSubmit}
                               profile={profile}/>
                : <ProfileData isOwner={isOwner}
                               goToEditMode={updateStatus}
                               profile={profile}/>}
            <MyPostsContainer />
        </div>
    );
};

export default Profile;