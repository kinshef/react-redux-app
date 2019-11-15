import {AuthMe} from "./auth-reduser";

const SET_INITIALIZED = 'APP/SET_INITIALIZED';

let initialState = {
    initialaized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {...state, initialaized: true}
        default:
            return state;
    }
};

export const setInitialaized = () => ({type: SET_INITIALIZED});


export const initialaizeApp = () => dispatch => {
    let promis = dispatch(AuthMe());
    Promise.all([promis])
        .then(() => {
        dispatch(setInitialaized())
    })
}


export default appReducer;