import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'PROFILE/ADD-POST';
const SET_USER_PROFILE = 'PROFILE/SET_USER_PROFILE';
const SET_STATUS = 'PROFILE/SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'PROFILE/SAVE_PHOTO_SUCCESS';
const TOGGLE_PROFILE_UPDATE_STATUS = 'PROFILE/TOGGLE_PROFILE_UPDATE_STATUS';

let initialState = {
    postData: [
        {laick: '12', massage: '1231', id: 1},
        {laick: '10', massage: '123123', id: 2}
    ],
    profile: null,
    status: '',
    profileUpdateStatus: true
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {...state, postData: [...state.postData, {id: 3, massage: action.newPost, laick: 0}]}
        case SET_USER_PROFILE:
            return {...state, profile: {...action.profile}}
        case SET_STATUS:
            return {...state, status: action.status}
        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos}}
        case TOGGLE_PROFILE_UPDATE_STATUS:
            return {...state, profileUpdateStatus:  action.profileUpdateStatus}
        default:
            return state;
    }
};

export const addPost = (newPost) => ({type: ADD_POST, newPost});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});
export const setProfileUpdateStatus = (profileUpdateStatus) => ({type: TOGGLE_PROFILE_UPDATE_STATUS, profileUpdateStatus});

export const getProfileUsers = (userID) => async dispatch => {
    let response = await profileAPI.getUser(userID);
    dispatch(setUserProfile(response));
}

export const getUsersStatus = (userID) => async dispatch => {
    let response = await profileAPI.getStatus(userID);
    dispatch(setStatus(response));
}

export const updateUsersStatus = (status) => async dispatch => {
    let response = await profileAPI.updateStatus(status);
    if (response.resultCode === 0) {
        dispatch(setStatus(status));
    }
}
export const savePhoto = (photo) => async dispatch => {
    let response = await profileAPI.savePhoto(photo);
    if (response.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.photos));
    }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
    let response = await profileAPI.saveProfile(profile);
    const myId = getState().auth.id;
    if (response.resultCode === 0) {
        dispatch(getProfileUsers(myId));
        dispatch(setProfileUpdateStatus(true))
    }else {
        dispatch(stopSubmit("edit-profile", {_error: response.messages[0]}));
        // dispatch(stopSubmit("edit-profile", {"contacts": { "facebook": response.messages[0]} }));
        // return Promise.reject(response.messages[0])
    }
}


export default profileReducer;