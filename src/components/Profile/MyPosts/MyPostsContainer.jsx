import React from 'react';
import {addPost} from "../../../redux/profile-reduser";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

class MyPostsContainer extends React.Component {
    render() {
        return (<MyPosts postData={this.props.postData} newPostText={this.props.newPostText} addPost={this.props.addPost}/>);
    }
}

let mapStateToProps = (state) => {
    return{
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
};

export default connect(mapStateToProps, {addPost})(MyPostsContainer)
