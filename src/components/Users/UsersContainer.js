import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {setCurrentPage, getUsers, getUnFollowUsers, getFollowUsers} from "../../redux/users-reduser";
import {getCurrentPage, getFollowingInProgress, getUserIsFetching, getPageSize, getTotalUsersCount, getUserData
} from "../../redux/selectors/users-selectors";
import Preloader from "../common/Preloader";
import {compose} from "redux";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (p) => {
        this.props.getUsers(p, this.props.pageSize)
        this.props.setCurrentPage(p)
    }
    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users userData={this.props.userData}
                       totalUsersCount={this.props.totalUsersCount}
                       currentPage={this.props.currentPage}
                       followingInProgress={this.props.followingInProgress}
                       pageSize={this.props.pageSize}
                       getUnFollowUsers={this.props.getUnFollowUsers}
                       getFollowUsers={this.props.getFollowUsers}
                       onPageChanged={this.onPageChanged}/>
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return{
        userData: getUserData(state),
        followingInProgress: getFollowingInProgress(state),
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        isFetching: getUserIsFetching(state),
        totalUsersCount: getTotalUsersCount(state)
    }
};

export default compose(
    connect(mapStateToProps, {getUnFollowUsers, getFollowUsers, setCurrentPage, getUsers})
)(UsersContainer);