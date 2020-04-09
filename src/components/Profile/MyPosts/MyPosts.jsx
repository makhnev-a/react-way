import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let postsItems = [
        {likeCount: 2, message: 'Hi, how are you?'},
        {likeCount: 10, message: 'It\'s my first post!'}
    ];

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea>
                </textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message={postsItems[0].message} likeCount={postsItems[0].likeCount}/>
                <Post message={postsItems[1].message} likeCount={postsItems[1].likeCount}/>
            </div>
        </div>
    );
};

export default MyPosts;