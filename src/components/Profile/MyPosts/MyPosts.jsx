import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
    let newPostElement = React.createRef();

    let postsItems = props.posts
        .map((post, index) =>
            <Post
                key={`${post.message} + ${index}`}
                message={post.message}
                likeCount={post.likeCount}
            />
        );

    let onAddPost = (values) => props.addPost(values.newPostText);

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsItems}
            </div>
        </div>
    );
};

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={'newPostText'}
                    placeholder={'Ввведите пост'}
                    component={'textarea'}
                    // onChange={onPostChange}
                    // ref={newPostElement}
                    // value={props.newPostText}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
};

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;