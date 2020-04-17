import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreater, updatePostTextActionCreater} from '../../../redux/state';

const MyPosts = (props) => {
    let postsItems = props.posts
        .map(post => <Post message={post.message} likeCount={post.likeCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => props.dispatch(addPostActionCreater());

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updatePostTextActionCreater(text));
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsItems}
            </div>
        </div>
    );
};

export default MyPosts;