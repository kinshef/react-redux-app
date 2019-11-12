import {profileAPI} from "../api/api";

const ADD_POST = 'PROFILE/ADD-POST';
const SET_USER_PROFILE = 'PROFILE/SET_USER_PROFILE';
const SET_STATUS = 'PROFILE/SET_STATUS';

let initialState = {
    postData: [
        {laick: '12', massage: '1231', id: 1},
        {laick: '10', massage: '123123', id: 2}
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {...state, postData: [...state.postData, {id: 3, massage: action.newPost, laick: 0}]}
        case SET_USER_PROFILE:
            return {...state, profile: {...action.profile}}
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state;
    }
};

export const addPost = (newPost) => ({type: ADD_POST, newPost});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getProfileUsers = (userID) => async dispatch => {
    let data = await profileAPI.getUser(userID)
    dispatch(setUserProfile(data));
}

export const getUsersStatus = (userID) => async dispatch => {
    let status = await profileAPI.getStatus(userID)
    dispatch(setStatus(status));
}

export const updateUsersStatus = (status) => async dispatch => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}



export default profileReducer;