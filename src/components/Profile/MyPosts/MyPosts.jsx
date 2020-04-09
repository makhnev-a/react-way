import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let posts = [
        {likeCount: 2, message: 'Hi, how are you?'},
        {likeCount: 10, message: 'It\'s my first post!'}
    ];

    let postsItems = posts.map(post => <Post message={post.message} likeCount={post.likeCount}/>);

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
                {postsItems}
            </div>
        </div>
    );
};

export default MyPosts;