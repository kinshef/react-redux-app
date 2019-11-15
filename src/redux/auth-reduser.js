import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'AUTH/SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'AUTH/TOGGLE_IS_FETCHING';
const GET_CAPTCHA_URL_SUCCESS = 'AUTH/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: action.payload.isAuth
            }
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaUrl: action.url
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        default:
            return state;
    }
};

export const setUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const getCaptchaUrlSuccess = (url) => ({type: GET_CAPTCHA_URL_SUCCESS, url});


export const AuthMe = () => async dispatch => {
    dispatch(toggleIsFetching(true));
    let response = await authAPI.getAuthMe()
    if (response.resultCode === 0) {
        let authUser = response.data;
        dispatch(setUserData(authUser.id, authUser.email, authUser.login, true));
    }
    dispatch(toggleIsFetching(false));
}
export const AuthLogin = (email, password, rememberMe, captcha) => async dispatch => {
    let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.resultCode === 0) {
        dispatch(AuthMe())
    } else {
        let messages = response.messages.length > 0 ? response.messages[0] : "Common error"
        dispatch(stopSubmit("login", {_error: messages}));
        if(response.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
    }
}
export const AuthLogout = () => async dispatch => {
    let response = await authAPI.logout()
    if (response.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }
}
export const getCaptchaUrl = () => async dispatch => {
    let response = await securityAPI.getCaptchaUrl()
    let CaptchaUrl = response.url;
    dispatch(getCaptchaUrlSuccess(CaptchaUrl))
}


export default authReducer;