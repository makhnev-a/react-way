import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    let posts = [
        {likeCount: 2, message: 'Hi, how are you?'},
        {likeCount: 10, message: 'It\'s my first post!'}
    ];

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    );
};

export default Profile;