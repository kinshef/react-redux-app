
export const getUserData = (state) => {
    return state.usersPage.userData
}
export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const getPageSize = (state) => {
    return state.usersPage.pageSize
}
export const getUserIsFetching = (state) => {
    return state.usersPage.isFetching
}
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}



