import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {setCurrentPage, getUsers, getUnFollowUsers, getFollowUsers} from "../../redux/users-reduser";
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
                       displayedPage={this.props.displayedPage}
                       totalUsersCount={this.props.totalUsersCount}
                       currentPage={this.props.currentPage}
                       followingInProgress={this.props.followingInProgress}
                       pageSize={this.props.pageSize}
                       onPageChanged={this.onPageChanged}
                       getUnFollowUsers={this.props.getUnFollowUsers}
                       getFollowUsers={this.props.getFollowUsers}/>
            </>
        );
    }
}



let mapStateToProps = (state) => {
    return{
        userData: state.usersPage.userData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        displayedPage: state.usersPage.displayedPage,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};


export default compose(connect(mapStateToProps, {getUnFollowUsers, getFollowUsers, setCurrentPage, getUsers}))(UsersContainer);