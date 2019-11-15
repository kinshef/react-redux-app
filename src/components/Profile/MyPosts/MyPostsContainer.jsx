import React from 'react';
import {addPost} from "../../../redux/profile-reduser";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {getPostData} from "../../../redux/selectors/profile-selectors";

class MyPostsContainer extends React.Component {
    render() {
        return (<MyPosts postData={this.props.postData} newPostText={this.props.newPostText} addPost={this.props.addPost}/>);
    }
}

let mapStateToProps = (state) => {
    return{
        postData: getPostData(state)
    }
};

export default connect(mapStateToProps, {addPost})(MyPostsContainer)
