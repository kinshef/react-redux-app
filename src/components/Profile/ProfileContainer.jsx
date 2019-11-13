import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {
    getProfileUsers,
    getUsersStatus,
    savePhoto,
    updateUsersStatus,
    saveProfile,
    setProfileUpdateStatus
} from "../../redux/profile-reduser";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userId;
        if(!userID) {
            userID = this.props.authorizedUserId
            if(!userID) {
                this.props.history.push("/login")
            }
        }
        this.props.getProfileUsers(userID)
        this.props.getUsersStatus(userID)
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.match.params.userId !== this.props.match.params.userId){
            this.props.getProfileUsers(this.props.authorizedUserId)
            this.props.getUsersStatus(this.props.authorizedUserId)
        }
    }

    render() {
        return (<Profile savePhoto={this.props.savePhoto}
                         isOwner={!this.props.match.params.userId}
                         updateUsersStatus={this.props.updateUsersStatus}
                         status={this.props.status}
                         saveProfile={this.props.saveProfile}
                         profileUpdateStatus={this.props.profileUpdateStatus}
                         profile={this.props.profile}/>)
    }
}

let mapStateToProps = (state) => {
    return{
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth,
        profileUpdateStatus: state.profilePage.profileUpdateStatus
    }
};


export default compose(withRouter,
    connect(mapStateToProps, {getProfileUsers, getUsersStatus, updateUsersStatus, saveProfile, savePhoto})
)(ProfileContainer);

