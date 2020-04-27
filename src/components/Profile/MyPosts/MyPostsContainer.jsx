import React from "react";
import {addPostActionCreater, updatePostTextActionCreater} from '../../../redux/profile.reducer';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updatePostTextActionCreater(text));
        },
        addPost: () => {
            dispatch(addPostActionCreater())
        }
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;