import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utilit/validators";
import {Input} from "../../../utilit/FormControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

const MyPostsForm = ({handleSubmit}) => {
    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <Field placeholder={"New text"} name={"newPost"} component={Input} validate={[required, maxLength10]} />
            <button>add post</button>
        </form>
    )
};

const NewPost = reduxForm({form: 'newPost'})(MyPostsForm)

let MyPosts = ({postData, addPost}) => {
    let myPostsElement = postData.map((even) => <Post laick={even.laick} key={even.id} id={even.id} massage={even.massage}/>);
    const addNewPost = (value) => {addPost(value.newPost)}

    return (
        <div className={style.MyPosts}>
            <p>MyPosts</p>
            <div className={style.container}>
                {myPostsElement}
                <NewPost onSubmit={addNewPost}/>
            </div>
        </div>
    );
};

export default MyPosts;