import {userAPI} from "../api/api";
import {objectItemReplacements} from "../utilit/objectItemReplacements";

const FOLLOW = 'USER/FOLLOW';
const UN_FOLLOW = 'USER/UN_FOLLOW';
const SET_USERS = 'USER/SET_USERS';
const SET_CURRENT_PAGE = 'USER/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'USER/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'USER/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'USER/TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    userData: [],
    pageSize: 15,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                userData: objectItemReplacements(state.userData, 'id', action.userId, {followed: true})
            }
        case UN_FOLLOW:
            return {
                ...state,
                userData: objectItemReplacements(state.userData, 'id', action.userId, {followed: false})
            }
        case SET_USERS:
            return {...state, userData: action.userData}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)
            }
        default:
            return state;
    }
};

export const follow = (userId) => ({type: FOLLOW, userId});
export const unFollow = (userId) => ({type: UN_FOLLOW, userId});
export const setUsers = (userData) => ({type: SET_USERS, userData});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowingInProgress = (isFetching, id) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, id});

export const getUsers = (currentPage, pageSize) => async dispatch => {
    dispatch(toggleIsFetching(true));
    let response = await userAPI.getUser(currentPage, pageSize);
    dispatch(setUsers(response.items));
    dispatch(setUsersTotalCount(response.totalCount));
    dispatch(toggleIsFetching(false));
}

const followUnFollowUsers = async (dispatch, id, apiMethod, actionCreator) => {
    dispatch(toggleIsFollowingInProgress(true, id));
    let response = await apiMethod(id);
    if (response.resultCode === 0) {
        dispatch(actionCreator(id))
    }
    dispatch(toggleIsFollowingInProgress(false, id));
}
export const getUnFollowUsers = (id) => dispatch => {
    followUnFollowUsers(dispatch, id, userAPI.getUnFollow.bind(userAPI), unFollow);
}
export const getFollowUsers = (id) => dispatch => {
    followUnFollowUsers(dispatch, id, userAPI.getFollow.bind(userAPI), follow);
}


export default usersReducer;