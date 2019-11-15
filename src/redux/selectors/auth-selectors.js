
export const getAuthIsFetching = (state) => {
    return state.auth.isFetching
} // header
export const getIsAuth = (state) => {
    return state.auth.isAuth
} // profile, header
export const getLogin = (state) => {
    return state.auth.login
}// header


export const getCaptchaUrl = (state) => {
    return state.auth.captchaUrl
} // login


export const getAuthId = (state) => {
    return state.auth.id
} // profile




