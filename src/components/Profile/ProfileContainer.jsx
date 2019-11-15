import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfileUsers, getUsersStatus, savePhoto, updateUsersStatus, saveProfile, setProfileUpdateStatus
} from "../../redux/profile-reduser";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {getProfile, getProfileUpdateStatus, getStatus} from "../../redux/selectors/profile-selectors";
import {getAuthId} from "../../redux/selectors/auth-selectors";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userID = this.props.match.params.userId;
        if(!userID) {
            userID = this.props.authorizedUserId
            if(!userID) {
                this.props.history.push("/login") //redirect
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
        return (<Profile isOwner={!this.props.match.params.userId}
                         savePhoto={this.props.savePhoto}
                         updateUsersStatus={this.props.updateUsersStatus}
                         status={this.props.status}
                         saveProfile={this.props.saveProfile}
                         profileUpdateStatus={this.props.profileUpdateStatus}
                         setProfileUpdateStatus={this.props.setProfileUpdateStatus}
                         profile={this.props.profile}/>)
    }
}

let mapStateToProps = (state) => {
    return{
        profile: getProfile(state),
        status: getStatus(state),
        profileUpdateStatus: getProfileUpdateStatus(state),
        authorizedUserId: getAuthId(state)
    }
};

export default compose(withRouter,
    connect(mapStateToProps, {getProfileUsers, getUsersStatus, updateUsersStatus, saveProfile, savePhoto, setProfileUpdateStatus})
)(ProfileContainer);

