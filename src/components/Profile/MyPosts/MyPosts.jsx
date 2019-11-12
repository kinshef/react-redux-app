import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utilit/validators";
import {Input} from "../../../utilit/FormControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

const MyPostsForm = (props) => {
    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <Field placeholder={"New text"} name={"newPost"} component={Input} validate={[required, maxLength10]} />
            <button>add post</button>
        </form>
    )
}

const NewPost = reduxForm({form: 'newPost'})(MyPostsForm)

let MyPosts = (props) => {
    let myPostsElement = props.postData.map((even) => <Post laick={even.laick} key={even.id} id={even.id} massage={even.massage}/>);

    const addNewPost = (value) => {props.addPost(value.newPost)}

    return (
        <div className={s.MyPosts}>
            <p>MyPosts</p>
            <div className={s.container}>
                {myPostsElement}
                <NewPost onSubmit={addNewPost}/>
            </div>
        </div>
    );
};

export default MyPosts;